import styled from "styled-components";
import totorocursor from "../../assets/images/totorocursor.png";

export const TitleHeader = styled.div`
  display: flex;
  width: 15%;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "LouisGeorgeCafeBold";
  font-size: 3.5rem;
  color: var(--deep-blue);
  
  p {
    :hover {
      cursor: url(${totorocursor}), auto;
    }

    span {
      font-family: "LosingGripRegular";
      font-size: 5rem;
      color: var(--dark-blue);
    }
  }

  @media screen and (max-width: 768px){
    display: none;
  }
`;
