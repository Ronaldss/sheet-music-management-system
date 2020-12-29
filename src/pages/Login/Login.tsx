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
// =======
//       <Aside>
//         <ImageLogo src={Logo} alt="Logo" />
//       </Aside>
//       <Content>
//         <FormLogin>
//           <Form>
//             <InputMusic type="email" placeholder="Email" />
//             <InputMusic type="password" placeholder="Senha" />
//             <ButtonMusic>Entrar</ButtonMusic>
//           </Form>
//           <Divide />
//           <div>
//             <q>
//               Colossenses 3:23 – Tudo o que fizerem, façam de todo o coração,
//               como para o Senhor, e não para os homens.
//             </q>
//           </div>
//         </FormLogin>
//       </Content>
//     </ContainerLogin>
// >>>>>>> 0e3b1450625beb820f4fabf7a1ca1fc354eaea57
  );
}
