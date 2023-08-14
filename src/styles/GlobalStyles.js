import { createGlobalStyle } from "styled-components";
import LosingGripRegular from "../assets/fonts/LosingGripRegular-YxG4.ttf";
import LouisGeorgeCafe from "../assets/fonts/LouisGeorgeCafe.ttf";
import LouisGeorgeCafeBold from "../assets/fonts/LouisGeorgeCafeBold.ttf";
import LouisGeorgeCafeLight from "../assets/fonts/LouisGeorgeCafeLight.ttf";
import Bebas from "../assets/fonts/Bebas-Regular.ttf";
import totorocursor from "../assets/images/totorocursor.png";

const GlobalStyles = createGlobalStyle`

:root {
    --white: #E8F1F2;
    --light-blue: #9BD1E5;
    --medium-blue: #247BA0;
    --shadow-blue: #6A8EAE;
    --dark-blue: #006494;
    --deep-blue: #13293D;
    --confirm-blue: #3E92CC;
    --medium-blue-gradient: linear-gradient(#247BA0, #006494);
    --white-blue-gradient: linear-gradient(rgba(232, 241, 242, 0.5),
      rgba(36, 123, 160, 0.5));
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

button {
  font-family: "LouisGeorgeCafeBold";
  font-size: 1rem;
  height: 60px;
  width: 120px;
  border-radius: 5px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  :hover {
    cursor: url(${totorocursor}), auto;
    transition: all 0.5s ease;
  }
}

`;

export default GlobalStyles;
