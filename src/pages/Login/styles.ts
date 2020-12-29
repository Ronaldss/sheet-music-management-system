import styled from "styled-components";
import banner from "../../assets/img/grid.png";

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background: url("${banner}");

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

export const Aside = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #c0392b;
  padding: 10%;
  color: #fff;

  @media (max-width: 550px) {
    width: 100%;
  }
`;

export const ImageLogo = styled.img`
  height: 200px;

  @media (max-width: 550px) {
    height: 65px;
  }
`;

export const Content = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media (max-width: 550px) {
    width: 100%;
  }
`;

export const FormLogin = styled.div`
  background-color: #c0392b;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 67px 0 45px;
  width: 70%;

  div {
    width: 80%;
  }

  q {
    font-size: 12px;
    color: #fff;
    margin: 0;
    padding: 0;
  }

  @media (max-width: 800px) {
    width: 80%;
    padding: 47px 0 22px;

    q {
      font-size: 10px;
    }
  }
`;

export const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Divide = styled.hr`
  width: 80%;
  margin: 15px;
`;
