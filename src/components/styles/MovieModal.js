import styled from "styled-components";

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: center;
  justify-content: center;
  text-align: left;
  margin: 0.25rem;
  padding: 0 0.75rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background: var(--white);
  max-height: 450px;
  width: auto;
  background: linear-gradient(#e8f2f2, #247ba0, #006494);
  font-family: "LouisGeorgeCafeBold";

  .title {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0.1rem;
    color: var(--dark-blue);

    h1 {
      font-size: 1.5rem;
      max-height: 40px;
      overflow: hidden;
    }

    small {
      font-size: 1rem;
      font-family: "LouisGeorgeCafe";
      color: #000;
    }
  }

  img {
    max-height: 175px;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }

  .text-container {
    overflow: hidden;
    margin: 0.5rem 0;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    font-family: "LouisGeorgeCafe";
    min-height: 160px;
    background: var(--white);
  }

  p {
    text-align: center;
    font-size: 1.2rem;

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
    font-size: 0.9rem;
    color: var(--white);
  }

  @media screen and (max-width: 760px){
    img {
      width: 90%;
    }

    .text-container {
      width: 90%;
    }
  }
`;
