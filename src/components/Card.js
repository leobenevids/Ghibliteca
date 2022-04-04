import React from "react";
import { Card } from "./styles/Card";

const MovieCard = ({ title, image, score, date, japanese, _callback }) => {

  return (
    <Card>
      <div className="title">{title}</div>
      <div className="sub">{japanese}</div>
      <img src={image} alt={title} />
      <footer>
        <span>{score / 10}</span>
        <div>{date}</div>
      </footer>
    </Card>
  );
};

export default MovieCard;
