import { useState, FormEvent } from "react";
import { useHistory } from "react-router-dom";

import { ButtonMusic, InputMusic } from "../../components";
import { Container, Form, Section, Title } from "./styles";
import { auth, db } from "../../database";
import { useFirebaseAuth } from "../../context";

const initial__state = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

export default function Register() {
  const [formValues, setFormValues] = useState(initial__state);
  const [errorPassword, setErrorPassword] = useState("");
  const history = useHistory();
  const { user } = useFirebaseAuth();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (formValues.password !== formValues.confirm_password) {
      setErrorPassword("As senhas precisam ser iguais!");
      return;
    }

    auth
      .createUserWithEmailAndPassword(formValues.email, formValues.password)
      .then(async (credentials) => {
        //preciso salvar o displayName
        const isAdmin = user?.displayName === "maestro";
        return db.collection("users").doc(credentials.user?.uid).set({
          isAdmin,
        });
      });
    setFormValues(initial__state);
    history.push("/dashboard");
  }

  return (
    <Container>
      <Title>Cadastro</Title>
      <Form onSubmit={handleSubmit}>
        <InputMusic
          type="nome"
          name="name"
          placeholder="Nome"
          onChange={(event) =>
            setFormValues({ ...formValues, name: event.target.value })
          }
          required
        />
        <InputMusic
          type="email"
          name="email"
          placeholder="Email"
          onChange={(event) =>
            setFormValues({ ...formValues, email: event.target.value })
          }
          required
        />
        <InputMusic
          type="password"
          name="password"
          placeholder="Senha"
          minLength={6}
          onChange={(event) =>
            setFormValues({ ...formValues, password: event.target.value })
          }
        />
        <InputMusic
          type="password"
          name="confirm_password"
          placeholder="Digite a senha novamente"
          minLength={6}
          onChange={(event) =>
            setFormValues({
              ...formValues,
              confirm_password: event.target.value,
            })
          }
          required
        />
        <Section>
          <div>
            <ButtonMusic type="submit">Cadastrar</ButtonMusic>
          </div>
        </Section>
      </Form>
    </Container>
  );
}
