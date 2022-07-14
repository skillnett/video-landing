import { Colors } from 'constants/colors';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import fonts from 'assets/fonts';

export const GlobalStyles = createGlobalStyle`
  ${fonts}
  ${normalize}

  html, body {
    font-family: Silka;
  }
 
  body {
    padding: 0;
    margin: 0;
    background-color: ${Colors.secondaryDark};
    color: ${Colors.white};
    position: relative;
  }

  h1, h2, h3, h4, h5, p {
    margin: 0;
  }

  .text-gradient {
    background: -webkit-linear-gradient(${Colors.gradientPrimary}, ${Colors.gradientSecondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  button {
    cursor: pointer;
  }
`;
