import styled from "styled-components";
import totorocursor from "../../assets/images/totorocursor.png";

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
`;

export const CarouselContainer = styled.div`
  position: relative;
  font-family: "LosingGripRegular";
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 47.5vw;
  height: 67vh;
  border-radius: 5px;
  background: var(--white-blue-gradient);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  :hover {
    cursor: url(${totorocursor}), auto;
  }

  @media screen and (max-width: 760px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 100%;
  }
`;

export const Carousel = styled.div`
  display: flex;
  margin: 0.5rem;
  overflow-x: hidden;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;

  @media screen and (max-width: 760px) {
    flex-direction: column;
    margin: 0;
  }
`;
