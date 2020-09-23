import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
body {
    margin: 0;
    font-size: 112.5%;
    background: var( --background-darkblue);
    color: var(--font-color-white);
}

:root{
    --background-darkblue: #1c114e;
    --transparent-blue: #ffffff1a;
    --darkgreen: #51B6AB;
    --lightgreen: #52B7BC;
    --lightblue: #66BAF7;
    --lightpurple: #A6A1F9;
    --lightpink:#F9D9DA;
    --darkyellow: #F7BF67;
    --darkpink: #E693B5;
    --boxshadow-color: #0000008b;

    --font-color-white: #FFFFFF;
    --font-weight-semibold: 600;
    --font-weight-regular: 400;
    --font-weight-light: 300;
}
`
