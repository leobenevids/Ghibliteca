import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin-top: 1rem;
  align-items: center;
  height: 40px;
  @media screen and (max-width: 600px) {
    margin: 0;
  }
`;

export const Circle = styled.button`
  width: ${({ isSelected }) => (isSelected ? "15px" : "10px")};
  height: ${({ isSelected }) => (isSelected ? "15px" : "10px")};
  border-radius: 50%;
  margin: 10px;
  background-color: ${({ isSelected }) =>
    isSelected ? css`var(--light-blue)` : css`var(--white)`};
  transition: all 0.3s ease-in;

  :hover {
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    width: ${({ isSelected }) => (isSelected ? "10px" : "5px")};
    height: ${({ isSelected }) => (isSelected ? "10px" : "5px")};
    margin: 5px;
  }
`;
