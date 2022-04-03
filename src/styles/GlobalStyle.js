import { createGlobalStyle } from "styled-components";
import LosingGripRegular from "../fonts/LosingGripRegular-YxG4.ttf";
import LouisGeorgeCafe from "../fonts/LouisGeorgeCafe.ttf";
import LouisGeorgeCafeBold from "../fonts/LouisGeorgeCafeBold.ttf";
import LouisGeorgeCafeLight from "../fonts/LouisGeorgeCafeLight.ttf";


const GlobalStyle = createGlobalStyle`

:root {
    --white: #E8F1F2;
    --light-blue: #1B98E0;
    --medium-blue: #247BA0;
    --dark-blue: #006494;
    --deep-blue: #13293D;
    --salmon-gradient: linear-gradient(#f48473, #f99);
    --medium-blue-gradient: linear-gradient(#247BA0, #006494);
    --white-blue-gradient: linear-gradient(#e8f1f2, #247ba0);
    --blue-white-gradient: linear-gradient(#247ba0, #e8f2f2);
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
}

`;

export default GlobalStyle;
