import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: rgba(238, 238, 238, 0.5);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  z-index: 1;
`;

export const Container = styled.div`
  width: 400px;
  height: 200px;
  border-radius: 12px;
  background-color: white;
  background: rgba(155, 209, 229, 0.8);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  font-family: "LouisGeorgeCafe";
  font-size: 1.5rem;
  position: absolute;
`;

export const Content = styled.div`
  font-size: 1.35rem;
  margin-bottom: 40px;
  span {
    font-family: "Bebas";
    color: var(--red);
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: space-around;

  .confirmButton {
    :hover {
      color: #fff;
      background-color: var(--confirm-blue);
    }
  }
`;
