import React from "react";
import { Circle, Wrapper } from "./styles";

const Count = ({ quantity, currIndex, setCurrIndex }) => {
  return (
    <Wrapper>
      {Array.from({ length: quantity }, (_, index) => (
        <Circle onClick={() => setCurrIndex(index)} key={index} isSelected={index === currIndex} />
      ))}
    </Wrapper>
  );
};

export default Count;
