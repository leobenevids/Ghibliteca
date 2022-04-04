import React from "react";
import { LinkButton } from "./styles/Button.js";

const Button = () => {
  const handleClick = () => {
    
    window.open("https://www.netflix.com/browse/genre/81227213", "_blank");
  };

  return (
    <LinkButton>
      <button onClick={handleClick}>
        <p>watch on</p> <span>Netflix</span>
      </button>
    </LinkButton>
  );
};

export default Button;
