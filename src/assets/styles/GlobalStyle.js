import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


    *, *::before, *::after{
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5%;
        margin:0; 
        padding:0;
    }

    body {
        font-size: 1.6rem;
        margin: 0;
        padding: 0;
    }

    h1{
        font-family: Atma, cursive;
    }

`;

export default GlobalStyle;
