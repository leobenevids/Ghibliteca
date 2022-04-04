import styled from "styled-components";
import totorocursor2 from "../../assets/totorocursor2.png";

export const LinkButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;

  button {
    font-family: "LouisGeorgeCafeBold";
    font-size: 1rem;
    height: 3.2rem;
    width: 8rem;
    background: var(--white);
    border-radius: 5px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

    :hover {
      cursor: url(${totorocursor2}), auto;
      color: var(--white);
      background: var(--red);
      transition: ease-in-out 0.5s;

      p {
        display: none;
      }

      span {
        color: var(--white);
      }
    }
  }

  span {
    font-family: "Bebas";
    color: var(--red);
    font-size: 1.6rem;
  }
`;
