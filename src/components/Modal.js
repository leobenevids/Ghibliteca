import React from "react";
import { ModalContainer, ModalInner, ModalCloseButton } from "./styles/Modal";

const Modal = (props) => {
  return props.trigger ? (
    <ModalContainer>
      <ModalInner>
        <ModalCloseButton onClick={() => props.setTrigger(false)}>close</ModalCloseButton>
        {props.children}
      </ModalInner>
    </ModalContainer>
  ) : (
    ""
  );
};

export default Modal;
