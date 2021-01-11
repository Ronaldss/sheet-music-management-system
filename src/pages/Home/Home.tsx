import { Container, GridContainer, ImgPainel, ImageIcon, Title } from "./styles";
import Painel from "../../assets/img/panel.jpeg";
import Icon from "../../assets/img/music-icon.png";

export default function Home() {
  return (
    <Container>
      <ImgPainel src={Painel} alt="img painel" />
      <Title>Músicas</Title>
      <nav>  
        <GridContainer>
          <a href="#"><div><ImageIcon src={Icon} alt="icon" />Adorador por Excelência</div></a>
          <a href="#"><div><ImageIcon src={Icon} alt="icon" />Adorador por Excelência</div></a>
          <a href="#"><div><ImageIcon src={Icon} alt="icon" />Adorador por Excelência</div></a>
          <a href="#"><div><ImageIcon src={Icon} alt="icon" />Adorador por Excelência</div></a>
          <a href="#"><div><ImageIcon src={Icon} alt="icon" />Adorador por Excelência</div></a>
          <a href="#"><div><ImageIcon src={Icon} alt="icon" />Adorador por Excelência</div></a>
          <a href="#"><div><ImageIcon src={Icon} alt="icon" />Adorador por Excelência</div></a>
          <a href="#"><div><ImageIcon src={Icon} alt="icon" />Adorador por Excelência</div></a>
          <a href="#"><div><ImageIcon src={Icon} alt="icon" />Adorador por Excelência</div></a>
        </GridContainer>
      </nav>
    </Container>
  );
}
