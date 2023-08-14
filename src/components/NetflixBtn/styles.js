import styled from "styled-components";

export const Button = styled.button`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
  background: var(--white);


  span {
    font-family: "Bebas";
    color: var(--red);
    font-size: 1.6rem;
  }

  :hover {
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

  @media screen and (max-width: 600px) {
    margin: 0;
  }
`;
