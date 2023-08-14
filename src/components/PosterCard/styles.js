import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  margin: 0.25rem;
  padding: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background: rgba(232, 241, 242, 0.7);
  border-radius: 5px;
  scroll-snap-align: start;
  pointer-events: none;

  .title {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.25rem;

    p {
      color: var(--deep-blue);
      font-size: 2rem;
    }

    span {
      color: var(--dark-blue);
      font-size: 0.75rem;
      font-weight: bold;
    }
  }

  img {
    max-height: 550px;
    pointer-events: touch;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    border-radius: 5px;
  }

  footer {
    font-size: 2rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    pointer-events: all;
    
    .title {
      p {
        font-size: 4vh;
      }

      span {
        font-size: 1.1vh;
      }
    }

    img {
      max-height: 60vh;
    }
  }
`;
