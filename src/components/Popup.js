import React, { useState } from "react";
import { Background, Container, Content, Buttons } from "./styles/Popup";

const Popup = ({ closePopup }) => {
  const openLink= () => {
    window.open("https://www.netflix.com/browse/genre/81227213", "_blank");
  };

  return (
    <Background>
      <Container>
        <Content>
          You'll be redirect to another page. Do you wish to continue?
        </Content>
        <Buttons>
          <button onClick={() => closePopup(false)}>Cancel</button>
          <button onClick={openLink}>Confirm</button>
        </Buttons>
      </Container>
    </Background>
  );
};

export default Popup;
