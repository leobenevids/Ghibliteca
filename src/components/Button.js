import React, { useState } from "react";
import { LinkButton } from "./styles/Button.js";

const Button = () => {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <>
      <LinkButton>
        <button
          onClick={() => {
            setOpenPopup(true);
          }}
        >
          <p>watch on</p> <span>Netflix</span>
          {openPopup}
        </button>
      </LinkButton>
    </>
  );
};

export default Button;
