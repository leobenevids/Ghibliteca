import React from "react";
import { Card } from "./styles";
import { useContext } from "react";
import CurrentMovieContext from "../../contexts/CurrentMovieContext";

const SynopsisCard = ({
  original,
  romanised,
  banner,
  description,
  director,
  producer,
}) => {
  const { setBanner } = useContext(CurrentMovieContext);

  return (
    <Card onClick={() => setBanner(banner)}>
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
