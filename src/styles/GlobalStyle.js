import { createGlobalStyle } from "styled-components";
import LosingGripRegular from "../fonts/LosingGripRegular-YxG4.ttf";

const GlobalStyle = createGlobalStyle`

:root {
    --white: #E8F1F2;
    --light-blue: #1B98E0;
    --medium-blue: #247BA0;
    --dark-blue: #006494;
    --deep-blue: #13293D;
    --salmon-gradient: linear-gradient(#f48473, #f99);
    --medium-blue-gradient: linear-gradient(#247BA0, #006494);
}

@font-face {
    font-family: 'LosingGripRegular';
    src: url(${LosingGripRegular})
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
