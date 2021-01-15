import styled from "styled-components";

export const Container = styled.div`
  margin: 60px auto 60px;
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
  grid-template-columns: repeat(4,1fr);
  gap: 15px;

  div {
    font-size: 22px;
    background: #fff;
    border: solid 1px #c0392b;
    border-radius: 5px;
    width: 100%;
    padding: 30px 0;

    text-align: center;
  }
  @media(max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media(max-width: 690px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageIcon = styled.img`
  height: 35px;
  text-align: center;
`;
