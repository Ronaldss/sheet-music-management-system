import { ContainerLogin, Aside, Content, FormLogin } from "./styles";
import ButtonMusic from '../../components/ButtonMusic/index.js';
import InputMusic from '../../components/InputMusic/index';

export default function Login() {
  return (
    <ContainerLogin>
    <Aside>
    Orquestra Celebrat
    <div>
      <h2>Bem-vindo</h2>
    </div>
    <div>
      <p>
        Faça seu login ou cadastre-se para acessar o ambiente de gerenciamento de 
        partituras da Orquestra Celebrarte. Maceió - AL Benedito Bentes II
      </p>
    </div>
  </Aside>
  <Content>
    <FormLogin>
      <>
        <h1>Login</h1>
        <div>
          {/* <input placeholder="Email" />
          <input type="password" placeholder="Senha" /> */}
          <InputMusic />
          <InputMusic type="password" placeholder="Senha"/>
        </div>
        <ButtonMusic>Entrar</ButtonMusic><br/>
        <div>
          <a href="/">Cadastre-se</a><br/>
        </div>
        <div>
          <hr />
        </div>
        <div>
          <q>
            Colossenses 3:23 – Tudo o que fizerem, façam de todo o coração, 
            como para o Senhor, e não para os homens.
          </q>
        </div><br/>
      </>
    </FormLogin>
  </Content>
  </ContainerLogin>
  );
}
