import { InputMusic, ButtonMusic } from "../../components";
import Logo from "../../assets/img/logo.png";

import {
  ContainerLogin,
  Aside,
  ImageLogo,
  Content,
  FormLogin,
  Form,
  Divide,
} from "./styles";

export default function Login() {
  return (
    <ContainerLogin>
      <Aside>
        <ImageLogo src={Logo} alt="Logo" />
      </Aside>
      <Content>
        <FormLogin>
          <Form>
            <InputMusic type="email" placeholder="Email" />
            <InputMusic type="password" placeholder="Senha" />
            <ButtonMusic>Entrar</ButtonMusic>
          </Form>
          <Divide />
          <div>
            <q>
              Colossenses 3:23 – Tudo o que fizerem, façam de todo o coração,
              como para o Senhor, e não para os homens.
            </q>
          </div>
        </FormLogin>
      </Content>
    </ContainerLogin>
  );
}
