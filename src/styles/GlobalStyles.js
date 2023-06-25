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
}

button {
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "LouisGeorgeCafeBold";
    font-size: 1rem;
    height: 3.2rem;
    width: 8rem;
    background: var(--white);
    border-radius: 5px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

    span {
    font-family: "Bebas";
    color: var(--red);
    font-size: 1.6rem;
  }


    :hover {
      cursor: url(${totorocursor}), auto;
      color: var(--white);
      background: rgba(229, 9, 2, 0.8);
      transition: ease-in-out 0.4s;

      p {
        display: none;
      }

      span {
        color: var(--white);
      }
    }
  
    @media screen and (max-width: 768px) {
        display: none;
    }
 
}



`;

export default GlobalStyles;
