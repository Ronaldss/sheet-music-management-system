import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto 20px;
  width: 80%;
  /* background-color: #fdfdfd; */
  /* display: flex; */
  justify-content: center;

  a {
    text-decoration: none;
  }
  a:hover {
    background: hotpink;
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
  /* display: flex; */
  /* justify-content: space-between; */
`;
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;

  justify-content: center;
  align-content: center;
  justify-items: center;
  justify-self: center;
  align-self: center;
  padding-bottom: 35px;

  gap: 10px;

  div {
    font-size: 22px;
    background: #fff;
    border: solid 1px #c0392b;
    border-radius: 5px;
    height: 80px;
    width: 350px;

    text-align: center;
    line-height: 80px;
  }
`;

export const ImageIcon = styled.img`
  height: 30px;
  text-align: center;
`;
