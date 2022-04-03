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
  border-radius: 5px;
  flex: none;
  scroll-snap-align: start;
  pointer-events: none;

  img {
    max-height: 100%;
    height: 350px;
    border-radius: 5px;
    point-events: touch;
    
    :hover {
      cursor: pointer;
      transform: scale(1.01);
    }
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
`;
