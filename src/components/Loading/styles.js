import styled from "styled-components";

export const LoadingComponent = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin: auto;
  perspective: 800px;

  img {
    position: absolute;
    width: 40px;
    height: 40px;
    animation: spiral 5s linear infinite, grow 1s ease-in-out infinite alternate;
    transform-origin: center;

    @keyframes spiral {
      from {
        transform: translateX(0) translateY(0) rotate(0deg);
      }
      to {
        transform: translateX(100px) translateY(0) rotate(720deg);
      }
    }

    @keyframes grow {
      from {
        width: 40px;
        height: 40px;
      }
      to {
        width: 80px;
        height: 80px;
      }
    }
  }
`;
