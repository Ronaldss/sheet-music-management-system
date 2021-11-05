import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto 20px;
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

export const ImgPainel = styled.img`
  margin-top: 10px;
  height: 400px;
  width: 100%;

  @media (max-width: 550px) {
    height: 65px;
  }
`;
export const Nav = styled.nav`
  width: 100%;
`;
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 35px;

  gap: 15px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageIcon = styled.img`
  height: 30px;
  text-align: center;
`;
