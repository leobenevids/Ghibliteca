import React from "react";
import { Fragment } from "react";
import PosterCard from "../PosterCard";
import SynopsisCard from "../SynopsisCard";

const MovieView = ({ film }) => {
  return (
    <Fragment>
      <PosterCard
        title={film.title}
        image={film.image}
        japanese={film.original_title}
        score={film.rt_score}
        date={film.release_date}
      />
      <SynopsisCard
        original={film.original_title}
        romanised={film.original_title_romanised}
        banner={film.movie_banner}
        description={film.description}
        director={film.director}
        producer={film.producer}
      />
    </Fragment>
  );
};

export default MovieView;
