import { createGlobalStyle } from 'styled-components';

import quote from '../images/quote.svg';

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

    blockquote {
        font-style: italic;
        color: rgb(0,0,0, 0.7);
        position: relative;
        margin: 40px 10px 20px;

        ${({ theme }) => theme.media.above.m} {
            margin: 30px 5px;
        }
    }
    
    blockquote::before {
        content: '';
        display: block;
        position: absolute;
        left: -10px;
        top: -25px;
        width:33px;
        height: 25px;
        background: url(${quote});
        z-index:-1;
        
        ${({ theme }) => theme.media.above.m} {
            left: -50px;
            top: -5px;
        }
        
    }

`;

export default GlobalStyle;
