import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalInner = styled.div`
  position: relative;
  padding: 1rem;
  width: 100%;
  max-width: 640px;
  background-color: #fff;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  color: #fff;
  border: 2px solid black;
  background: var(--salmon-gradient);
  padding: 0.2rem;

  :hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: ease 0.25s;
  }
`;
