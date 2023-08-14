import React from "react";
import PosterCard from "../PosterCard";
import SynopsisCard from "../SynopsisCard";
import { Frame, FrameContainer } from "./styles";

const MovieView = ({ movie, movies, currIndex, setCurrIndex }) => {
  const {
    title,
    image,
    original_title,
    original_title_romanised,
    rt_score,
    release_date,
    movie_banner,
    description,
    director,
    producer,
  } = movie;

  const lastIndex = movies.length - 1;

  const handleOnWheel = ({ deltaY }) => {
    const frameElement = document.querySelector(Frame);
    const direction = deltaY > 0 ? "next" : "previous";
    scrollFrame(frameElement, direction);
  };

  const scrollFrame = (element, direction) => {
    defineNewIndex(direction);
    const scrollAmount = direction === "next" ? 500 : -500;

    element?.scrollBy(scrollAmount, 0);
  };

  const defineNewIndex = (direction) => {
    if (direction === "next") {
      setCurrIndex(currIndex === lastIndex ? 0 : currIndex + 1)
    } else {
      setCurrIndex(currIndex === 0 ? lastIndex : currIndex - 1)
    }
  };

  return (
    <FrameContainer>
      <Frame onWheel={handleOnWheel}>
        <PosterCard
          title={title}
          image={image}
          japanese={original_title}
          score={rt_score}
          date={release_date}
        />
        <SynopsisCard
          original={original_title}
          romanised={original_title_romanised}
          banner={movie_banner}
          description={description}
          director={director}
          producer={producer}
        />
      </Frame>
    </FrameContainer>
  );
};

export default MovieView;
