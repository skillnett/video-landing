import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-modern-css-reset';
import fonts from 'assets/fonts';

export const GlobalStyles = createGlobalStyle`
  ${fonts}
  ${reset}

  html, body {
    font-family: Silka;
  }
 
  body {
    padding: 0;
    margin: 0;
    background-color: ${(props: any) => props.theme.colors.secondaryDark};
    color: ${(props: any) => props.theme.colors.white};
    position: relative;
  }

  h1, h2, h3, h4, h5, p {
    margin: 0;
  }

  .text-gradient {
    background: ${(props: any) =>
        `-webkit-linear-gradient(${props.theme.colors.gradientPrimary}, ${props.theme.colors.gradientSecondary})`};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  button {
    cursor: pointer;
  }

  video {
    border-radius: 10px;
    border-end-end-radius: 5px;
    border-end-start-radius: 5px;
  }
`;
