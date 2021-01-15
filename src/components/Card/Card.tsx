import { Container, Title, Icon } from './styles';

type CardProps = {
  iconLeft: string;
  title: string;
}

export default function Card({ iconLeft, title }: CardProps) {
  return (
    <Container>
      <Icon className="iconify" data-icon={iconLeft} data-inline="false" />
      <Title>{title}</Title>
    </Container>
);
}
