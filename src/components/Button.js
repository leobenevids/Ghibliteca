import React, { useState } from "react";
import { LinkButton } from "./styles/Button.js";
import Popup from "../components/Popup";

const Button = () => {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <>
      <LinkButton
        onClick={() => {
          setOpenPopup(true);
        }}
      >
        <button>
          <p>watch on</p> <span>Netflix</span>
        </button>
      </LinkButton>
      {openPopup && <Popup closePopup={setOpenPopup} />}
    </>
  );
};

export default Button;
