import { Container, GridContainer, ImageIcon, Title } from "./styles";
import Icon from "../../assets/img/pdf-icon.png";

import { Card } from "../../components";

const array = [
  {
    id: '1',
    title: "Violino 1",
  },
  {
    id: '2',
    title: "Violino 1",
  },
  {
    id: '3',
    title: "Violino 1",
  },
  {
    id: '4',
    title: "Violino 1",
  },
  {
    id: '5',
    title: "Violino 1",
  },
  {
    id: '6',
    title: "Violino 1",
  },
  {
    id: '7',
    title: "Violino 1",
  },
  {
    id: '8',
    title: "Violino 1",
  },
  {
    id: '9',
    title: "Violino 1",
  },
  {
    id: '10',
    title: "Violino 1",
  },
  {
    id: '11',
    title: "Violino 1",
  },
  {
    id: '12',
    title: "Violino 1",
  },
  {
    id: '13',
    title: "Violino 1",
  },
  {
    id: '14',
    title: "Violino 1",
  },
]

export default function Musics() {
  return (
    <Container>
      <Title>Adorador por Excelência</Title>
      <nav>
        <GridContainer>
        {array.map(item => <Card iconLeft="bx:bxs-file-pdf" title={item.title} />)}
        </GridContainer>
      </nav>
    </Container>
  );
}
