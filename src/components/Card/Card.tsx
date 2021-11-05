import { useHistory } from "react-router-dom";
import { Container, Title, Icon } from "./styles";

type CardProps = {
  iconLeft: string;
  title: string;
  url?: string;
};

export default function Card({ iconLeft, title, url }: CardProps) {
  const history = useHistory();

  function handleNavigation() {
    history.push(`/musics/${title}`);
  }

  function openSheetMusic() {
    window.open(url, "_blank");
  }

  return (
    <Container onClick={url ? openSheetMusic : handleNavigation}>
      <Icon className="iconify" data-icon={iconLeft} />
      <Title>{title}</Title>
    </Container>
  );
}
