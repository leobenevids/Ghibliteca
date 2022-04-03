import styled from "styled-components";

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: center;
  justify-content: center;
  text-align: left;
  margin: 0.25rem;
  padding: 0 1rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background: var(--white);
  border-radius: 5px;
  max-height: 450px;

  .title {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;

    h1 {
      font-size: 1.5rem;
    }

    small {
        font-size: 1.2rem
    }
    
  }

  img {
    max-height: 175px;
    border-radius: 5px;
  }

  .text-container {
    overflow: hidden;
    height: 200px;
    margin: 0.5rem;
  }

  p {
    text-align: center;
    font-size: 1.5rem;

    -moz-transform: translateY(100%);
    -webkit-transform: translateY(100%);
    transform: translateY(100%);

    -moz-animation: my-animation 10s linear infinite;
    -webkit-animation: my-animation 10s linear infinite;
    animation: my-animation 10s linear infinite;
  }

  @-webkit-keyframes my-animation {
    from {
      -webkit-transform: translateY(100%);
    }
    to {
      -webkit-transform: translateY(-100%);
    }
  }

  @keyframes my-animation {
    from {
      -moz-transform: translateY(100%);
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
    }
    to {
      -moz-transform: translateY(-100%);
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }
  }

  footer {
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-size: 1.5rem;
    margin-bottom: 0px;
  }
`;
