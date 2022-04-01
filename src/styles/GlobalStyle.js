import { createGlobalStyle } from "styled-components";
import LosingGripRegular from "../fonts/LosingGripRegular-YxG4.ttf";

const GlobalStyle = createGlobalStyle`

:root {
    --white: #E8F1F2;
    --light-blue: #1B98E0;
    --medium-blue: #247BA0;
    --dark-blue: #006494;
    --deep-blue: #13293D;
    --salmon-gradient: linear-gradient(#f48473, #f99)
}

@font-face {
    font-family: 'LosingGripRegular';
    src: url(${LosingGripRegular})
}

* {
    margin: 0;
    padding: 0;
}


body {
    font-family: 'LosingGripRegular';
    font-size: 2rem;
}
`;

export default GlobalStyle;
