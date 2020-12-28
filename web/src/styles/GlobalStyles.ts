import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  html {
    background: var(--bg-color);
  }

  *, input, button {
    border: 0;
    background: none;
    outline: none;
    font-family: Roboto, sans-serif;
    color: var(--white);
  }

  button {
    cursor: pointer;
  }

  :root {
    --bg-color: #2c2541;
    --white: #fff;
    --lighter: #faf9fa;
    --blue: #00a8e0;
    --blue-dark: #06688a;
    --blue-hover: #1bb9ee;
    --loot-box: rgba(177,157,216,.15);
    --company: #898395;
    --green: #14b866;
    --sidebar: #262037;
    --tooltip: #201c2b;
    --description: #b8b5c0;
    --gray: #dad8de;
    --language-hover: #7d5bbe;
    --border-color: hsla(0, 0%, 100%, .25);
    --footer: #17141f;
    --footer-text: #afacb7;
  }

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: var(--footer);
  }

  ::-webkit-scrollbar-track {
    background: #403363;
  }
`;
