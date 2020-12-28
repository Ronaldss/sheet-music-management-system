import styled from "styled-components";
import banner from "../../assets/img/grid.png"

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  /* background: burlywood; */
  /* background: bisque; */
  background:url("${banner}");

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

export const Aside = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #C0392B;
  padding: 10%;
  color: #fff;

  h2 {
    font-size: 50px;
    align-items: center;
    margin: 0;
  }

  p {
    margin-top: 35px;
    text-align: center;
    font-size: 1rem;
  }

  @media (max-width: 500px) {
    width: 100%;
    padding: 20px;
  }
`;

export const Content = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const FormLogin = styled.div`
  background-color: #C0392B;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: 1px solid #dcd5d5;
  border-radius: 5px;
  padding: 10px;
  margin: 0;
  width: 70%;

  hr {
    margin: 15px;
  }

  h1 {
    color: #fff;
    font-size: 40px;
    text-align: center;
    margin: 20px;
    margin-bottom:50px;
  }
  h2 {
    color: #c20b2e;
    font-size: 35px;
    text-align: center;
    margin: 45px;
  }
  div {
    width: 80%;

    input {
      background: #ecf0f1;
      border-radius: 5px;
      margin-bottom: 20px;
      padding: 8px;
      border-style: none;
      align-items: center;
      width: 90%;
      color: #737373;
      font-size:12px;
    }
  }

  @media (max-width: 800px) {
    width: 80%;
  }
  a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    margin-left: auto;
    margin-right: auto;
  }
  q {
    font-size:10px;
    color: #fff;
  }
`;