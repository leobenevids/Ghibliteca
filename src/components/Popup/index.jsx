import React from "react";
import { Background, Container, Content, Buttons } from "./styles";

const Popup = ({ closePopup }) => {
  const openLink= () => {
    window.open("https://www.netflix.com/browse/genre/81227213", "_blank");
  };

  return (
    <Background>
      <Container>
        <Content>
          Oh! Do you wanna go to <span>Netflix</span>?
        </Content>
        <Buttons>
          <button onClick={() => closePopup(false)}>Cancel</button>
          <button className="confirmButton" onClick={openLink}>Confirm</button>
        </Buttons>
      </Container>
    </Background>
  );
};

export default Popup;
