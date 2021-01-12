import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto 20px;
  width: 80%;
  justify-content: center;
  background: green;

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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;

  justify-content: center;
  align-content: center;
  justify-items: center;
  justify-self: center;
  align-self: center;
  background: pink;

  gap: 5px;

  div {
    font-size: 22px;
    background: #fff;
    border: solid 1px #c0392b;
    border-radius: 5px;
    height: 90px;
    /* width: 260px; */
    width: 100%;

    text-align: center;
    line-height: 90px;
  }
`;

export const ImageIcon = styled.img`
  height: 35px;
  text-align: center;
`;

