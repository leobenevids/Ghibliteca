import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0.25rem;
  padding: 0.25rem 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background: linear-gradient(#e8f2f2, #247ba0, #006494);
  font-family: "LouisGeorgeCafeBold";
  border-radius: 5px;

  .title {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 45px;
    margin-bottom: 0.2rem;

    p {
      color: var(--dark-blue);
      font-size: 2vh;
      font-weight: bold;
      overflow: hidden;
    }

    span {
      color: var(--deep-blue);
      font-size: 1.3vh;
      font-family: "LouisGeorgeCafeBold";
    }
  }

  .content {
    max-height: 350px;

    img {
      max-height: 170px;
      box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
        rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
        rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
      border-radius: 5px;
    }

    .text-container {
      height: 170px;
      overflow: hidden;
      box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
        rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
        rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
      font-family: "LouisGeorgeCafe";
      background: var(--white);
      border-radius: 5px;
    }

    p {
      z-index: 0;
      text-align: center;
      font-size: 1.2rem;

      -moz-transform: translateY(100%);
      -webkit-transform: translateY(100%);
      transform: translateY(100%);

      -moz-animation: my-animation 15s linear infinite;
      -webkit-animation: my-animation 15s linear infinite;
      animation: my-animation 20s linear infinite;
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
  }

  footer {
    font-size: 1.2vh;
    width: 100%;
    height: 100%;
    min-height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: var(--white);
    font-weight: bold;
  }


  @media screen and (max-width: 760px) {
    border-radius: 0;
    width: 100%;

    .title{
      p{
        font-size: 2.5vh;
      }

      span {
        font-size: 1.5vh;
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 300px;
    }

    img {
      height: 100%;
      margin-bottom: 10px;
    }

    .text-container {
      height: 90%;
    }

    footer {
      font-size: 1.5vh;
    }
  }
`;
