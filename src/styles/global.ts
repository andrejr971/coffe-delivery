import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.base_text};

    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: ${({ theme }) => theme.fonts.text_regular_s}
  }

  button {
    cursor: pointer;
  }
`
