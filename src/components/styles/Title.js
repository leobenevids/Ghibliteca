import styled from "styled-components";
import totorocursor2 from "../../assets/totorocursor2.png";

export const TitleHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "LouisGeorgeCafeBold";
  font-size: 3.5rem;
  color: var(--deep-blue);

  p {
    :hover {
      cursor: url(${totorocursor2}), auto;
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
