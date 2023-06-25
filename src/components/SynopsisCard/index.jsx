import React from "react";
import { Card } from "./styles";

const SynopsisCard = ({
  original,
  romanised,
  banner,
  description,
  director,
  producer,
}) => {

  return (
    <Card>
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
    </Card>
  );
};

export default SynopsisCard;
