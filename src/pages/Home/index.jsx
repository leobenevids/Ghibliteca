import React, { useState } from "react";
import { getFilms } from "../../services/api";
import { Wrapper, Carousel, CarouselContainer } from "./styles";
import { useEffect } from "react";
import Title from "../../components/Title";
import Popup from "../../components/Popup";
import PosterCard from "../../components/PosterCard";
import SynopsisCard from "../../components/SynopsisCard";
import { Fragment } from "react";
import NetflixBtn from "../../components/NetflixBtn";
import { useContext } from "react";
import CurrentMovieContext from "../../contexts/CurrentMovieContext";

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
    document.querySelector(Carousel).addEventListener("wheel", (event) => {
      if (event.deltaY > 0) {
        event.target.scrollBy(500, 0);
      } else {
        event.target.scrollBy(-500, 0);
      }
    });
  };

  const { banner } = useContext(CurrentMovieContext);

  return (
    <Fragment>
      <Wrapper banner={banner}>
      <Title />
        <CarouselContainer>
          {openPopup && <Popup closePopup={setOpenPopup} />}
          <Carousel onWheel={handleOnWheel}>
            {films?.map((film) => (
              <Fragment>
                <PosterCard
                  key={film.id}
                  title={film.title}
                  image={film.image}
                  japanese={film.original_title}
                  score={film.rt_score}
                  date={film.release_date}
                />
                <SynopsisCard
                  key={film.id}
                  original={film.original_title}
                  romanised={film.original_title_romanised}
                  banner={film.movie_banner}
                  description={film.description}
                  director={film.director}
                  producer={film.producer}
                />
              </Fragment>
            ))}
          </Carousel>
        </CarouselContainer>
        <NetflixBtn setOpenPopup={setOpenPopup} />
      </Wrapper>
    </Fragment>
  );
};

export default Home;
