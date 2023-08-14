import styled from "styled-components";

export const Wrapper = styled.div`
  transition: background-image 0.5s ease;
  background: url(${({ banner }) => banner});
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  @media screen and (max-width: 600px){
    justify-content: space-around;
    padding: 1rem;
  }
`;