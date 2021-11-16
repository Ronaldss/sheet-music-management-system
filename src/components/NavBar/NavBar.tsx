import { useHistory } from "react-router-dom";

import { Container, Nav, Menu, NavLink, List, ListItem, Image } from "./styles";

import Logo from "../../assets/img/logo.png";
import { useFirebaseAuth } from "../../context";

export default function NavBar() {
  const history = useHistory();
  const { logout } = useFirebaseAuth();

  function goUpload() {
    history.push("/upload");
  }

  function logoutApp() {
    logout();
    history.push("/");
  }

  return (
    <Container>
      <Nav>
        <NavLink to="/dashboard">
          <Image src={Logo} />
        </NavLink>

        <Menu>
          <List>
            <ListItem onClick={goUpload}>Upload</ListItem>

            <ListItem onClick={logoutApp}>Sair</ListItem>
          </List>
        </Menu>
      </Nav>
    </Container>
  );
}
