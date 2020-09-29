import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
* {
    box-sizing: border-box;
    }
    :root{
    --background-lightblue: #98bfc4;
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

    --main-font-color: #FFFFFF;
    --font-weight-semibold: 600;
    --font-weight-regular: 400;
    --font-weight-light: 300;
}

body {
    font-family: 'Poppins', sans-serif;
    font-size: 112.5%;
    background: var( --background-darkblue); 
    color: var(--main-font-color);
    margin: 0 auto;
     max-width: 375px; 
    height: 100%;
}


`
