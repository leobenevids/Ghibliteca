import React from "react";
import { Modal } from "./styles/Modal";

const MovieModal = ({
  original,
  romanised,
  banner,
  description,
  director,
  producer,
}) => {
  return (
    <Modal>
      <div className="title">
        <h1>{original}</h1>
        <small>{romanised}</small>
      </div>
      <img src={banner} alt={banner} />
      <div className="text-container">
        <p>{description}</p>
      </div>

      <footer>
        <small>producer: {producer}</small>
        <small>director: {director}</small>
      </footer>
    </Modal>
  );
};

export default MovieModal;
