import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: var(--white);
  height: 100%;
  background: var(--salmon-gradient)
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: 100%;
  width: 80%;
  margin: 1rem;
  padding: 1rem;
`;
