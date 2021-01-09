import { ButtonMusic, InputMusic } from "../../components";
import { Container, MainRegister } from "./styles";


export default function Register() {
  return (
    <Container>
      <MainRegister>
        <h1>Cadastro</h1>
        <InputMusic
          type="nome"
          placeholder="Nome"
        />
        <InputMusic
          type="email"
          placeholder="Email"
        />
        <InputMusic
          type="senha"
          placeholder="Senha"
        />
        <ButtonMusic>Cadastrar</ButtonMusic>
      </MainRegister>
    </Container>
  );
}
