import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto 20px;
  width: 80%;
  justify-content: center;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin: 40px 0;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

export const Section = styled.section`
  width: 25%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    width: 100%;
    padding-top: 30px;
    padding-bottom: 50px;
  }
`;
