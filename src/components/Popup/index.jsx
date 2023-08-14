import React from "react";
import { Background, Container, Content, Buttons } from "./styles";

const Popup = ({ setOpenPopup, currentFilm }) => {
  const openLink= () => {
    window.open(`https://www.netflix.com/search?q=ghibli&jbv=${currentFilm?.neflix_id}`, "_blank");
  };

  return (
    <Background>
      <Container>
        <Content>
          Oh! Do you wanna go to <span>Netflix</span>?
        </Content>
        <Buttons>
          <button onClick={() => setOpenPopup(false)}>Cancel</button>
          <button className="confirmButton" onClick={openLink}>Confirm</button>
        </Buttons>
      </Container>
    </Background>
  );
};

export default Popup;
