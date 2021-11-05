import styled from "styled-components";

export const Container = styled.div`
  margin: 60px auto 60px;
  min-height: calc(100vh - 240px);
  width: 80%;
  justify-content: center;

  a {
    text-decoration: none;
  }
`;
export const Title = styled.h1`
  margin: 20px auto 40px auto;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
`;

export const Nav = styled.nav`
  width: 100%;
`;
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;

  @media (max-width: 690px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
