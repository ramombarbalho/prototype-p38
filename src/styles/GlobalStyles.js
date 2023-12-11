import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --color-text: #444;
  --color-hover: #000;
  --color-bg-body: #aaa;
  --color-bg-container-primary: #ccc;
  --color-bg-container-secondary: #eee;
  --color-primary: #2284ee;
  --color-input: #fff;
  --color-placeholder: #777;
  --shadow-light: #fff;
  --shadow-dark: #a2a2a2;
  --bg-overlay: rgba(255, 255, 255, 0.65);
  --color-border: #999;
  --color-border-light: #f1f1f1;

  &.dark-mode {
    --color-text: #bbb;
    --color-hover: #fff;
    --color-bg-body: #111;
    --color-bg-container-primary: #333;
    --color-bg-container-secondary: #555;
    --color-primary: #c00707;
    --color-input: #ddd;
    --color-placeholder: #555;
    --shadow-light: #3a3a3a;
    --shadow-dark: #000;
    --bg-overlay: rgba(0, 0, 0, 0.75);
    --color-border: #444;
    --color-border-light: #3a3a3a;
  }
}

* {
  margin: 0;
  padding: 0;
  border: none;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

html {
  font-size: 62.5%;
}

body {
  height: 100vh;
  color: var(--color-text);
  font-family: "Roboto Condensed", sans-serif;
  background-color: var(--color-bg-body);
  transition: background-color 0.3s;
  overflow: hidden;
}

/* ::-webkit-scrollbar {
  display: none;
}

::selection {
  background-color: var(--color-primary);
}

::placeholder {
  font-family: "Roboto Condensed", sans-serif;
  color: var(--color-placeholder);
  transition: color 0.3s;
} */

/* .toaster {
  font-size: 1.6rem !important;
  color: var(--color-text) !important;
  border-radius: 0px !important;
  background-color: var(--color-bg-container) !important;
  border: none !important;
  box-shadow: inset 0.1rem 0.1rem 0.1rem var(--shadow-light),
    0.1rem 0.1rem 0.1rem var(--shadow-dark) !important;
  transition: color 0.3s, background-color 0.3s, box-shadow 0.3s !important;
} */
`;

export const RESPONSIVE = {
  sm2: "310px",
  sm: "480px",
  md: "768px",
  lg: "992px",
};

export default GlobalStyles;
