import React, { useEffect, useState } from "react";
import api from "../services/api";
import Card from "./Card";
import Modal from "./Modal";
import Title from "./Title";
import Button from "./Button";
import Popup from "./Popup";
import { Wrapper, Container } from "./styles/Screen";

const HomeScreen = () => {
  const [films, setFilms] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);

  const handleOnWheel = () => {
    document.querySelector(Container).addEventListener("wheel", (event) => {
      if (event.deltaY > 0) {
        event.target.scrollBy(500, 0);
      } else {
        event.target.scrollBy(-500, 0);
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
    <>
      <Title />
      <Wrapper>
        {openPopup && <Popup closePopup={setOpenPopup} />}
        <Container onWheel={handleOnWheel}>
          {films?.map((film, i) => (
            <>
              <Card
                title={film.title}
                image={film.image}
                japanese={film.original_title}
                score={film.rt_score}
                date={film.release_date}
              />
              <Modal
                original={film.original_title}
                romanised={film.original_title_romanised}
                banner={film.movie_banner}
                description={film.description}
                director={film.director}
                producer={film.producer}
              />
            </>
          ))}
        </Container>
      </Wrapper>
      <button onClick={() => setOpenPopup(true)}>
        <p>watch on</p> <span>Netflix</span>
      </button>
    </>
  );
};

export default HomeScreen;
