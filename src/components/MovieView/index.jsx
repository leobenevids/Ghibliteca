import React from "react";
import { Fragment } from "react";
import PosterCard from "../PosterCard";
import SynopsisCard from "../SynopsisCard";
import { Carousel, CarouselContainer } from "./styles";

const MovieView = ({ film }) => {
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
  } = film;

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default MovieView;
