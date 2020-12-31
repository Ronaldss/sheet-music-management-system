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
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ accept: "application/pdf" });

  const files = acceptedFiles.map((file: FileWithPath) => (
    <ListItem key={file.path}>{file.path}</ListItem>
  ));

  console.log(files);

  return (
    <Container>
      <Title>Upload de partituras</Title>
      <InputMusic placeholder="Título da música" />
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
          <List>{files}</List>
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
    </Container>
  );
}
