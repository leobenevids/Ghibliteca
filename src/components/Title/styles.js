import styled from "styled-components";
import totorocursor from "../../assets/images/totorocursor.png";

export const TitleHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "LouisGeorgeCafeBold";
  font-size: 1rem;
  color: var(--deep-blue);
  
  p {
    :hover {
      cursor: url(${totorocursor}), auto;
    }

    span {
      font-family: "LosingGripRegular";
      font-size: 1.5rem;
      color: var(--dark-blue);
    }
  }

  @media screen and (max-width: 600px){
    font-size: large.8rem;
  }
`;
