import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  height: 60px;
  width: 100%;
  background-color: #c0392b;
  display: flex;
  justify-content: center;
`;

export const Nav = styled.nav`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
`;

export const ListItem = styled.li`
  color: white;
  font-size: 16px;
  margin-left: 18px;
`;

export const Image = styled.img`
  width: 100px;
  height: 50px;
`;
