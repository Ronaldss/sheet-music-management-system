import { ChangeEvent, FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { InputMusic, ButtonMusic } from "../../components";
import Logo from "../../assets/img/logo.png";

import { auth } from "../../database";

import {
  ContainerLogin,
  Aside,
  ImageLogo,
  Content,
  FormLogin,
  Form,
  Divide,
  Error,
} from "./styles";
import { useFirebaseAuth } from "../../context";

type errorsType = {
  [key: string]: string;
};

const errors: errorsType = {
  "auth/invalid-email": "Endereço de email inválido!",
  "auth/user-disabled": "Usuário desativado!",
  "auth/user-not-found": "Não existe usuário com esse email cadastrado!",
  "auth/wrong-password": "Senha incorreta!",
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();
  const { user } = useFirebaseAuth();
  console.log("user", user);
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");
    try {
      const response = await auth.signInWithEmailAndPassword(email, password);
      console.log(response);
      history.push("/dashboard");
    } catch (error) {
      setErrorMessage(errors[error.code]);
    }
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
            {errorMessage.length > 1 && <Error>{errorMessage}</Error>}
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
