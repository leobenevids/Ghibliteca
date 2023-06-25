import React, { useState, useEffect, useContext } from "react";
import { getFilms } from "../../services/api";
import { Wrapper, Carousel, CarouselContainer } from "./styles";
import Title from "../../components/Title";
import Popup from "../../components/Popup";
import PosterCard from "../../components/PosterCard";
import SynopsisCard from "../../components/SynopsisCard";
import { Fragment } from "react";
import NetflixBtn from "../../components/NetflixBtn";
import CurrentMovieContext from "../../contexts/CurrentMovieContext";

const Home = () => {
  const [films, setFilms] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { setBanner } = useContext(CurrentMovieContext);

  const fetchMovies = async () => {
    const response = await getFilms();
    setFilms(response);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleOnWheel = (event) => {
    const carousel = document.querySelector(Carousel);
    if (event.deltaY > 0) {
      carousel.scrollBy(500, 0);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      carousel.scrollBy(-500, 0);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const { banner } = useContext(CurrentMovieContext);
  const currentFilm = films[currentIndex];

  useEffect(() => {
    if (currentFilm) {
      setBanner(currentFilm.movie_banner);
    }
  }, [currentFilm, setBanner]);

  return (
    <Fragment>
      <Wrapper banner={banner}>
        <Title />
        <CarouselContainer>
          {openPopup && <Popup closePopup={setOpenPopup} />}
          <Carousel onWheel={handleOnWheel}>
            {films?.map((film, index) => (
              <Fragment key={index}>
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
            ))}
          </Carousel>
        </CarouselContainer>
        <NetflixBtn setOpenPopup={setOpenPopup} />
      </Wrapper>
    </Fragment>
  );
};

export default Home;
