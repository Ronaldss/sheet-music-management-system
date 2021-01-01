import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useDropzone, FileWithPath } from "react-dropzone";
import { ButtonMusic, InputMusic } from "../../components";
import {
  Container,
  Title,
  DropzoneContainer,
  Section,
  Subtitle,
  List,
  ListItem,
} from "./styles";

export default function Upload() {
  const [title, setTitle] = useState("");
  const [files, setFiles] = useState<FileWithPath[]>([]);
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ accept: "application/pdf" });

  useEffect(() => {
    setFiles(files.concat(acceptedFiles));
    // eslint-disable-next-line
  }, [acceptedFiles]);

  const filesList = files.map((file: FileWithPath) => (
    <ListItem key={file.path}>{file.path}</ListItem>
  ));

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
            <List>{filesList}</List>
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
