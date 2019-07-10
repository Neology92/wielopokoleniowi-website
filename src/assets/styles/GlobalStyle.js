import { createGlobalStyle } from 'styled-components';
import bg from '../images/bg.svg';

const GlobalStyle = createGlobalStyle`


    *, *::before, *::after{
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        background-image: url(${bg});
        background-size: cover;
    }

    h1{
        font-family: Atma, cursive;
    }

`;

export default GlobalStyle;
