import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-weight: normal;
    /* font-family: 'Montserrat', sans-serif; */
    font-family: 'Roboto', sans-serif;
  }
  #root, body {
    height: 100%;
    width: 100%;
    background-color: #f2f2f2;
  }
`;
