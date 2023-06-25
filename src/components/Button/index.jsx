import React, { useState } from "react";
import { LinkButton } from "./styles.js";
import { Fragment } from "react";

const Button = () => {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Button;
