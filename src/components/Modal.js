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
        <p>{original}</p>
        <span>{romanised}</span>
      </div>

      <div className="content">
        <img src={banner} alt={banner} />
        <div className="text-container">
          <p>{description}</p>
        </div>
      </div>

      <footer>
        <small>producer: {producer}</small>
        <small>director: {director}</small>
      </footer>
    </Modal>
  );
};

export default MovieModal;
