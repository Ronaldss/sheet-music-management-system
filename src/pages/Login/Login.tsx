import { ChangeEvent, FormEvent, useState } from "react";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(email, password);
  }

  return (
    <ContainerLogin>
      <Aside>
        <ImageLogo src={Logo} alt="Logo" />
      </Aside>
      <Content>
        <FormLogin>
          <Form onSubmit={handleSubmit}>
            <InputMusic
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setEmail(event.target.value)
              }
            />
            <InputMusic
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setPassword(event.target.value)
              }
            />
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
