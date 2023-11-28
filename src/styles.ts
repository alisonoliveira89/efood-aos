import { createGlobalStyle } from 'styled-components'

export const colors = {
  red: '#E66767',
  salmon: '#FFEBD9',
  white: '#FFF'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
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

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }

`
