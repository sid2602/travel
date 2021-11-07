import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  
  *{
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif; 
      margin: 0;
      padding: 0;
     }
  
  html,body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    overflow-x: hidden;
    font-size: 16px;
    background: ${({ theme }) => theme.colors.background};
  }

  button{
    background-color: white;
    border: none;
    color: black;
    cursor: pointer;
  }

  svg{
    font-size: 20px;
  }

`;

export default GlobalStyle;
