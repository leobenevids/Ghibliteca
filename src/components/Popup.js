import React, { useState } from "react";
import { Background, Container, Content, Buttons } from "./styles/Popup";

const Popup = () => {
  return (
    <Background>
      <Container>
        <Content>
          You'll be redirect to another page. Do you wish to continue?
        </Content>
        <Buttons>
          <button>Cancel</button>
          <button>Confirm</button>
        </Buttons>
      </Container>
    </Background>
  );
};

export default Popup;
