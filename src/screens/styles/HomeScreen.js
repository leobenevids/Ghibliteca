import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: var(--white);
  height: 100%;
  width: 62vw;
  background: var(--medium-blue-gradient);
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
export const Container = styled.div`
  display: flex;
  padding: 1rem;
  margin: 1rem;
  overflow-x: hidden;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
`;

export const Button = styled.button`
  width: 5rem;
  height: 30px;
  color: var(--dark-blue);
  background: #fff;
  border: 2px solid var(--dark-blue);
  font-family: "LosingGripRegular";
  font-size: 1.5rem;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
    background: var(--salmon-gradient);
    color: #fff;
    border: 1.5px solid black;
  }
`;
