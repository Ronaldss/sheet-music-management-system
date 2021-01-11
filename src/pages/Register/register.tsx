import { ButtonMusic, InputMusic } from "../../components";
import { Container, Section, Title } from "./styles";


export default function Register() {
  return (
    <Container>
      <Title>Cadastro</Title>
      <InputMusic
        type="nome"
        placeholder="Nome"
      />
      <InputMusic
        type="email"
        placeholder="Email"
      />
      <InputMusic
        type="password"
        placeholder="Senha"
      />
      <InputMusic
        type="password"
        placeholder="Digite a senha novamente"
      />
      <Section>
        <div>
          <ButtonMusic>Cadastrar</ButtonMusic>
        </div>
      </Section>
    </Container>
  );
}
