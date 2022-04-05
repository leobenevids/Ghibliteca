import { createGlobalStyle } from "styled-components";
import LosingGripRegular from "../fonts/LosingGripRegular-YxG4.ttf";
import LouisGeorgeCafe from "../fonts/LouisGeorgeCafe.ttf";
import LouisGeorgeCafeBold from "../fonts/LouisGeorgeCafeBold.ttf";
import LouisGeorgeCafeLight from "../fonts/LouisGeorgeCafeLight.ttf";
import Bebas from "../fonts/Bebas-Regular.ttf";
import totoro1 from "../assets/totorocursor1.png";
import totoro2 from "../assets/totorocursor2.png";

const GlobalStyle = createGlobalStyle`

:root {
    --white: #E8F1F2;
    --light-blue: #9BD1E5;
    --medium-blue: #247BA0;
    --shadow-blue: #6A8EAE;
    --dark-blue: #006494;
    --deep-blue: #13293D;
    --light-cyan: #D1FAFF;
    --medium-blue-gradient: linear-gradient(#247BA0, #006494);
    --white-blue-gradient: linear-gradient(#e8f1f2, #247ba0);
    --blue-white-gradient: linear-gradient(#9BD1E5, #E8F1F2);
    --red: #e50914;
}

@font-face {
    font-family: 'LosingGripRegular';
    src: url(${LosingGripRegular})
}

@font-face {
    font-family: 'LouisGeorgeCafe';
    src: url(${LouisGeorgeCafe});
}

@font-face {
    font-family: 'LouisGeorgeCafeLight';
    src: url(${LouisGeorgeCafeLight});
}


@font-face {
    font-family: 'LouisGeorgeCafeBold';
    src: url(${LouisGeorgeCafeBold});
}

@font-face {
    font-family: 'Bebas';
    src: url(${Bebas});
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


body {
    font-family: 'LosingGripRegular';
    font-size: 2rem;
    display: grid;
    place-items: center;
    height: 100vh;
    background: var(--white);
    /* cursor: url(${totoro1}), pointer; */
    


    @media screen and (max-width: 760px){
    background: black;
    }
}



`;

export default GlobalStyle;
