import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useDropzone, FileWithPath } from "react-dropzone";
import { ButtonMusic, InputMusic, EditInPlace } from "../../components";
import {
  Container,
  Title,
  DropzoneContainer,
  Section,
  Subtitle,
  List,
} from "./styles";

type Files = FileWithPath & {
  instrument?: string;
};

type FileChanged = {
  instrument: string;
  path: string;
};

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
              {files.map((file: FileWithPath) => (
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
