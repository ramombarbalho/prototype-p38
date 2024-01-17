import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --color-text: #d9d9d9;
  --color-hover: #fff;
  --color-bg-body: #222;
  --color-bg-container-primary: #333;
  --color-bg-container-secondary: #555;
  --color-primary: #c00707;
  --color-input: #ddd;
  --color-placeholder: #444;
  --shadow-light: #3a3a3a;
  --shadow-dark: #000;
  --bg-overlay: rgba(0, 0, 0, 0.75);
  --color-border: #444;
  --color-border-light: #3a3a3a;

  &.dark-mode {
    --color-text: #d9d9d9;
    --color-hover: #fff;
    --color-bg-body: #222;
    --color-bg-container-primary: #333;
    --color-bg-container-secondary: #555;
    --color-primary: #c00707;
    --color-input: #ddd;
    --color-placeholder: #444;
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
  font-family: 'Libre Franklin', sans-serif;
  background-color: var(--color-bg-body);
  transition: background-color 0.2s;
  overflow: hidden;
}

/* ::-webkit-scrollbar {
  display: none;
}

::selection {
  background-color: var(--color-primary);
}
*/

::placeholder {
  color: var(--color-placeholder);
}

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
