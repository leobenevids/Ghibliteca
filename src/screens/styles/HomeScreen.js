import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: var(--white);
  height: 100%;
  width: 70vw;
  border-radius: 5px;
  background: var(--white-blue-gradient);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    @media screen and (max-width: 900px) {
      width: 80vw;
    }

  @media screen and (max-width: 760px){
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }
  
`;

export const Container = styled.div`
  display: flex;
  padding: 1rem;
  margin: 1rem;
  overflow-x: hidden;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;

  @media screen and (max-width: 900px) {
    width: 100vw;
  }

  @media screen and (max-width: 760px){
    width: 100vw;
    flex-direction: column;
    align-items: center;
  }
`;
