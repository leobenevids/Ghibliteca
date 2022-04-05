import styled from "styled-components";

export const Background = styled.div`
  width: 600px;
  height: 490px;
  border-radius: 5px;
  background-color: rgba(238, 238, 238, 0.5);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const Container = styled.div`
  max-width: 500px;
  max-height: 500px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  font-family: "LouisGeorgeCafe";
  font-size: 1.5rem;
  position: absolute;
`;

export const Content = styled.div`
  span {
    font-family: "Bebas";
    color: var(--red);
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: space-between;
  height: 25px;
  width: 300px;

  .confirmButton {
    :hover {
      color: #fff;
      background-color: var(--light-blue);
    }
  }
`;
