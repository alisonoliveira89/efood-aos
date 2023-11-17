import { createGlobalStyle } from 'styled-components'

export const colors = {
  red: '#E66767',
  salmon: '#FFEBD9',
  white: '#FFF'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  h1, h3, p, {
    color: ${colors.red};
  }

  .logo {
    margin-top: 64px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

`
