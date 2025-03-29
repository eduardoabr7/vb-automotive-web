import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body, html {
    background-color: rgb(5, 5, 5);
    overflow-x: hidden;
    font-family: "Roboto", sans-serif;
    padding-bottom: 20px;
  }
`;

export default GlobalStyle;