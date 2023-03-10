import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root {
    font-size: 62.5%
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 1px ${({theme}) => theme.colors['brand-blue']};
  }

  body {
    background-color: ${({theme}) => theme.colors['base-background']};
    color: ${({theme}) => theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 ${({theme}) => theme.textSizes['text-text-m']} 'Nunito', sans-serif;
    line-height: 160%;
  }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`