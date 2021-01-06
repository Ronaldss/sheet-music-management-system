import { Container, Nav, GridContainer, ImgPainel, ImageIcon } from "./styles";
import Painel from "../../assets/img/panel.jpeg";
import Icon from "../../assets/img/music-icon.png";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <Container>
      <Nav>
      <ImgPainel src={Painel} alt="img painel" />
        <h1>Músicas</h1>
        <GridContainer>
          <div><ImageIcon src={Icon} alt="icon" />Adorador por Excelência</div>
          <div><ImageIcon src={Icon} alt="icon" />Adorador por Excelência</div>
          <div><ImageIcon src={Icon} alt="icon" />Adorador por Excelência</div>

          <div><ImageIcon src={Icon} alt="icon" />Adorador por Excelência</div>
          <div><ImageIcon src={Icon} alt="icon" />Adorador por Excelência</div>
          <div><ImageIcon src={Icon} alt="icon" />Adorador por Excelência</div>

          <div><ImageIcon src={Icon} alt="icon" />Adorador por Excelência</div>
          <div><ImageIcon src={Icon} alt="icon" />Adorador por Excelência</div>
          <div><ImageIcon src={Icon} alt="icon" />Adorador por Excelência</div> 
        </GridContainer>
      <Footer />
      </Nav>
    </Container>
  );
}
