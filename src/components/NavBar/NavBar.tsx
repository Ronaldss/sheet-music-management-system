import { Container, Nav, Menu, NavLink, List, ListItem, Image } from "./styles";

import Logo from "../../assets/img/logo.png";

export default function NavBar() {
  return (
    <Container>
      <Nav>
        <NavLink to="/dashboard">
          <Image src={Logo} />
        </NavLink>

        <Menu>
          <List>
            <NavLink to="/upload">
              <ListItem>Upload</ListItem>
            </NavLink>
            <NavLink to="/">
              <ListItem>Sair</ListItem>
            </NavLink>
          </List>
        </Menu>
      </Nav>
    </Container>
  );
}
