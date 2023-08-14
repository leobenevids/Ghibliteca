import styled from "styled-components";

export const SelectWrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background: rgba(232, 241, 242, 0.8);
  font-family: "LouisGeorgeCafe";
  height: 35px;
  display: flex;
  align-items: center;
  padding: 1rem;
  font-size: small;
  border-radius: 5px;
  margin-bottom: 1rem;
  font-size: 1rem;

  span {
    margin-right: 5px;
  }

  select {
    background: transparent;
    font-size: 1rem;
    font-family: "LouisGeorgeCafe";
    border: none;
    text-align: center;
    color: var(--dark-blue);

    &:focus {
      outline: none;
      box-shadow: none;
    }

    :hover {
      cursor: pointer;
    }
  }

  label {
    white-space: nowrap;
  }

  option {
    background: rgba(232, 241, 242, 0.7);
    border: none;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.8rem;


    select {
      font-size: 0.8rem;
    }
  }
`;
