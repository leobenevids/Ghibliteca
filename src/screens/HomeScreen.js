import React, { useEffect, useState } from "react";
import api from "../services/api";
import MovieCard from "../components/MovieCard";
import Modal from "../components/Modal";
import { Wrapper, Container } from "./styles/HomeScreen";

const HomeScreen = () => {
  const [films, setFilms] = useState([]);
  const [buttonModal, setButtonModal] = useState(false);

  useEffect(() => {
    api.get("films").then(({ data }) => {
      setFilms(data);
    });
    console.log(films);
  }, []);

  return (
    <Wrapper>
      <Container onClick={() => setButtonModal(true)}>
        <Modal trigger={buttonModal} setTrigger={setButtonModal}>
          <h3>My Modal</h3>
          <p>This is my button triggered</p>
        </Modal>
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
