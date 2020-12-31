import { Container, Nav, Menu, List, ListItem, Image } from "./styles";

import Logo from '../../assets/img/logo.png'

export default function NavBar() {
  return (
    <Container>
      <Nav>
        <Image src={Logo} />

        <Menu>
          <List>
            <ListItem>Upload</ListItem>
            <ListItem>Sair</ListItem>
          </List>
        </Menu>
      </Nav>
    </Container>
  );
}
