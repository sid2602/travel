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

  a{
    text-decoration: none;
    color: black;
  }


  .leaflet-popup{
    position: absolute;
    top: -155px ;
    width: 240px;
    padding: 0;
  }

  .leaflet-popup-content-wrapper{
    padding: 0;
  }

  .leaflet-popup-content{
    position: relative;
    width: 100% !important;
    height: 100%;
    left: 0;
    top: 0;
    margin: 0;
  }

  .leaflet-popup-tip-container{
    display: none;
  }

  .active-marker{
    animation: jumps;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
    animation-timing-function: ease-in-out;
    
  }

  @keyframes jumps{
    0%{
      top: 0;
    }
    50%{
      top: 0;
    }
    100%{
      top: 5px;
    }
  }

`;

export default GlobalStyle;
