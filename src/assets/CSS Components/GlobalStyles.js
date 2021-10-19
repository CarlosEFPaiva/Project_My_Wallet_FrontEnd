import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        padding: 24px 24px 16px;
        background-color: #8C11BE;
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
        color: #FFFFFF;
    }
`

export default GlobalStyles;