import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0.25rem;
  padding: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background: var(--white);
  border-radius: 5px;
  flex: none;
  scroll-snap-align: start;
  pointer-events: none;
  

  .title {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 45px;

    p {
      color: var(--deep-blue);
      font-size: 2.8vh;
    }

    span {
      color: var(--dark-blue);
      font-size: 1vh;
      font-weight: bold;
    }
  }

  img {
    max-height: 350px;
    point-events: touch;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    border-radius: 5px;
    margin-top: 0.1rem;
  }

  footer {
    font-size: 3vh;
    width: 100%;
    height: 100%;
    min-heigh: 45px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }



  @media screen and (max-width: 760px) {
    width: 90vw;
    border-radius: 0;
  }
`;
