import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useDropzone } from "react-dropzone";
import { ButtonMusic, InputMusic, EditInPlace } from "../../components";

import { storage, database } from "../../database";

import {
  Container,
  Title,
  DropzoneContainer,
  Section,
  Subtitle,
  List,
} from "./styles";

export default function Upload() {
  const [title, setTitle] = useState("");
  const [files, setFiles] = useState<Files[]>([]);
  const [changed, setChanged] = useState<FileChanged>();
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ accept: "application/pdf" });

  useEffect(() => {
    function transform() {
      const newAcceptedFiles = acceptedFiles.map((file: Files) => {
        file["instrument"] = file.name.slice(0, file.name.length - 4);
        return file;
      });
      setFiles(files.concat(newAcceptedFiles));
    }
    transform();
    // eslint-disable-next-line
  }, [acceptedFiles]);

  useEffect(() => {
    if (changed) {
      const newFiles = files.map((file) => {
        if (file.path === changed.path) file.instrument = changed.instrument;
        return file;
      });
      setFiles(newFiles);
      setChanged(undefined);
    }
    // eslint-disable-next-line
  }, [changed]);

  function _onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("file in onSubmit", title, files);
    let isExist = false;
    const refListMusic = database.ref("database/list_music");
    refListMusic.orderByValue().on("value", function (snapshot) {
      snapshot.forEach(function (data) {
        const titleMusic = data.child("title").val();
        if (title === titleMusic) isExist = true;
      });
    });
    if (!isExist) {
      refListMusic
        .push({ title })
        .then(function () {
          console.log("Synchronization succeeded");
        })
        .catch(function (error) {
          console.log("Synchronization failed");
        });
    }
    const promises = [];
    try {
      files.forEach((file) => {
        const uploadTask = storage
          .ref(`${title}`)
          .child(`${file.name}`)
          .put(file);
        promises.push(uploadTask);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            if (snapshot.state === "running") {
              console.log(`Progress: ${progress}%`);
            }
          },
          (error) => console.log(error.code),
          async () => {
            const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
            const refMusic = database.ref(`database/musics/${title}`);

            refMusic
              .push({ instrument: file.instrument, url: downloadURL })
              .then(function () {
                console.log("Synchronization succeeded");
              })
              .catch(function (error) {
                console.log("Synchronization failed");
              });
          }
        );
      });
      setTitle("");
      setFiles([]);
      setChanged(undefined);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <form onSubmit={_onSubmit}>
        <Title>Upload de partituras</Title>
        <InputMusic
          placeholder="Título da música"
          value={title}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setTitle(event.target.value)
          }
          required
        />
        <DropzoneContainer
          {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
        >
          <input {...getInputProps()} />
          <p>
            Arraste e solte alguns arquivos aqui ou clique para selecionar
            arquivos
          </p>
          <em>(apenas *.pdf serão aceitos)</em>
        </DropzoneContainer>
        {files.length > 0 && (
          <section>
            <Subtitle>Arquivos aceitos</Subtitle>
            <List>
              {files.map((file: Files) => (
                <EditInPlace file={file} onChangeFile={setChanged} />
              ))}
            </List>
          </section>
        )}
        <Section>
          <div>
            <ButtonMusic>Enviar</ButtonMusic>
          </div>
          <div>
            <ButtonMusic className="outline">Cancelar</ButtonMusic>
          </div>
        </Section>
      </form>
    </Container>
  );
}
