import { Container, GridContainer, ImgPainel, ImageIcon, Title } from "./styles";
import Painel from "../../assets/img/panel.jpeg";
import Icon from "../../assets/img/music-icon.png";

import { Card } from "../../components";

const array = [
  {
    id: '1',
    title: "Adorador por Excelência",
  },
  {
    id: '2',
    title: "Adorador por Excelência",
  },
  {
    id: '3',
    title: "Adorador por Excelência",
  },
  {
    id: '4',
    title: "Adorador por Excelência",
  },
  {
    id: '5',
    title: "Adorador por Excelência",
  },
  {
    id: '6',
    title: "Adorador por Excelência",
  },
  {
    id: '7',
    title: "Adorador por Excelência",
  },
  {
    id: '8',
    title: "Adorador por Excelência",
  },
  {
    id: '9',
    title: "Adorador por Excelência",
  },
  {
    id: '10',
    title: "Adorador por Excelência",
  },
  {
    id: '11',
    title: "Adorador por Excelência",
  },
  {
    id: '12',
    title: "Adorador por Excelência",
  },
  {
    id: '13',
    title: "Adorador por Excelência",
  },
  {
    id: '14',
    title: "Adorador por Excelência",
  },
]

export default function Home() {
  return (
    <Container>
      <ImgPainel src={Painel} alt="img painel" />
      <Title>Músicas</Title>
      <nav>  
        <GridContainer>
          {array.map(item => <Card iconLeft="bx:bxs-file-pdf" title={item.title} />)}
        </GridContainer>
      </nav>
    </Container>
  );
}
