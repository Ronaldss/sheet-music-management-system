import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #fdfdfd;
  display: flex;
  justify-content: center;
`;
export const ImgPainel = styled.img`
  margin-top: 10px;
  height: 400px;
  width: 100%;

  @media (max-width: 550px) {
    height: 65px;
  }
`;
export const Nav = styled.header`
  width: 80%;
  justify-content: space-between;

  h1 {
    display: flex;
    justify-content: center;
    margin: 10px;
    font-weight: bold;
    font-size: 36px;
  }
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
