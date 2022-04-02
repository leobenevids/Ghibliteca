import React, { useEffect, useState } from "react";
import api from "../services/api";
import MovieCard from "../components/MovieCard";
import { Wrapper, Container } from "./styles/HomeScreen";

const HomeScreen = () => {
  const [films, setFilms] = useState([]);

  const handleOnWheel = () => {
    document.querySelector(Container).addEventListener("wheel", (event) => {
      if (event.deltaY > 0) {
        event.target.scrollBy(400, 0);
      } else {
        event.target.scrollBy(-400, 0);
      }
    });
  };

  useEffect(() => {
    api.get("films").then(({ data }) => {
      setFilms(data);
    });
    console.log(films);
  }, []);

  return (
    <Wrapper>
      <Container onWheel={handleOnWheel}>
        {films?.map((film, i) => (
          <MovieCard
            title={film.title}
            image={film.image}
            japanese={film.original_title}
            score={film.rt_score}
            date={film.release_date}
          />
        ))}
      </Container>
    </Wrapper>
  );
};

export default HomeScreen;
