import React, { useState } from "react";
import { getFilms } from "../../services/api";
import { Container, Wrapper } from "./styles";
import { useEffect } from "react";
import Title from "../../components/Title"
import Popup from "../../components/Popup"
import PosterCard from "../../components/PosterCard";
import SynopsisCard from "../../components/SynopsisCard";

const Home = () => {
  const [films, setFilms] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);

  const fetchMovies = async () => {
    const response = await getFilms();
    setFilms(response);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleOnWheel = () => {
    document.querySelector(Container).addEventListener("wheel", (event) => {
      if (event.deltaY > 0) {
        event.target.scrollBy(500, 0);
      } else {
        event.target.scrollBy(-500, 0);
      }
    });
  };

  return (
    <>
      <Title />
      <Wrapper>
        {openPopup && <Popup closePopup={setOpenPopup} />}
        <Container onWheel={handleOnWheel}>
          {films?.map((film, index) => (
            <>
              <PosterCard
                key={index}
                title={film.title}
                image={film.image}
                japanese={film.original_title}
                score={film.rt_score}
                date={film.release_date}
              />
              <SynopsisCard
                key={index}
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

export default Home;
