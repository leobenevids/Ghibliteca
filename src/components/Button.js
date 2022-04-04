import React from "react";
import { LinkButton } from "./styles/Button.js";

const Button = () => {
  const handleClick = () => {
    window.open("https://www.netflix.com/browse/genre/81227213", "_blank");
  };

  return <LinkButton onClick={handleClick}>Watch on Netflix</LinkButton>;
};

export default Button;
