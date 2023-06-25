import React from "react";

import {Button} from "./styles"

const NetflixBtn = ({ setOpenPopup }) => {
  return(
  <Button onClick={() => setOpenPopup(true)}>
    <p>watch on</p> <span>Netflix</span>
  </Button>);
};

export default NetflixBtn;
