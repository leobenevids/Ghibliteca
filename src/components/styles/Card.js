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
  width: auto;
  background: var(--white);
  flex: none;
  scroll-snap-align: start;
  pointer-events: none;
  border-radius: 5px;

  img {
    max-height: 100%;
    height: 350px;
    point-events: touch;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    border-radius: 5px;
  }

  .title {
    color: var(--deep-blue);
  }

  .sub {
    font-size: 0.8rem;
  }

  footer {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  @media screen and (max-width: 760px) {
    width: 90vw;
    border-radius: 0;

    img {
    }
  }
`;
