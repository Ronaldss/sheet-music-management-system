import { Container, GridContainer, ImageIcon, Title } from "./styles";
import Icon from "../../assets/img/pdf-icon.png";

export default function Musics() {
  return (
    <Container>
      <Title>Adorador por Excelência</Title>
      <nav>
        <GridContainer>
          <a href="#">
            <div>
              <ImageIcon src={Icon} alt="icon" />
              Violino 1
            </div>
          </a>
          <a href="#">
            <div>
              <ImageIcon src={Icon} alt="icon" />
              Violino 2
            </div>
          </a>
          <a href="#">
            <div>
              <ImageIcon src={Icon} alt="icon" />
              Viola
            </div>
          </a>
          <a href="#">
            <div>
              <ImageIcon src={Icon} alt="icon" />
              Cello
            </div>
          </a>
          <a href="#">
            <div>
              <ImageIcon src={Icon} alt="icon" />
              Flautas
            </div>
          </a>
          <a href="#">
            <div>
              <ImageIcon src={Icon} alt="icon" />
              Clarinete 1
            </div>
          </a>
          <a href="#">
            <div>
              <ImageIcon src={Icon} alt="icon" />
              Clarinete 2
            </div>
          </a>
          <a href="#">
            <div>
              <ImageIcon src={Icon} alt="icon" />
              Sax Alto 1
            </div>
          </a>
          <a href="#">
            <div>
              <ImageIcon src={Icon} alt="icon" />
              Sax Alto 2
            </div>
          </a>
          <a href="#">
            <div>
              <ImageIcon src={Icon} alt="icon" />
              Violino 1
            </div>
          </a>
          <a href="#">
            <div>
              <ImageIcon src={Icon} alt="icon" />
              Violino 2
            </div>
          </a>
          <a href="#">
            <div>
              <ImageIcon src={Icon} alt="icon" />
              Viola
            </div>
          </a>
        </GridContainer>
      </nav>
    </Container>
  );
}
