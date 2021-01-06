import styled from "styled-components";

export const Container = styled.header`
  height: 60px;
  width: 100%;
  background-color: #c0392b;
  display: flex;
  justify-content: center;
  margin-top: 20px;
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

export const List = styled.ul`
  display: flex;
  list-style: none;
`;

export const ListItem = styled.li`
  color: white;
  font-size: 20px;
  margin-left: 18px;
`;

export const Image = styled.img`
  width: 100px;
  height: 50px;
`;
