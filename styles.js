import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    background: lightgrey;
    color:#0a0808;
  }
    h1 {
    text-align: center;
    font-size: 2rem;
    margin: 2rem 0;
  }
`;
