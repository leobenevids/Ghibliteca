import React, { useState, useEffect, useContext } from "react";
import { getFilms } from "../../services/api";
import { Wrapper, Carousel, CarouselContainer } from "./styles";
import Title from "../../components/Title";
import Popup from "../../components/Popup";
import { Fragment } from "react";
import NetflixBtn from "../../components/NetflixBtn";
import CurrentMovieContext from "../../contexts/CurrentMovieContext";
import MovieView from "../../components/MovieView";
import { Parallax } from 'react-parallax';

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
      currentIndex > films.length -1 ? setCurrentIndex(films.length - 1) :       setCurrentIndex((prevIndex) => prevIndex + 1);

    } else {
      carousel.scrollBy(-500, 0);
      currentIndex < 0 ? setCurrentIndex(0) : setCurrentIndex((prevIndex) => prevIndex - 1);
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
      <Parallax blur={10} bgImage={banner} strength={100}>
        <Wrapper>
        <Title />
        <CarouselContainer>
          {openPopup && <Popup closePopup={setOpenPopup} />}
          <Carousel onWheel={handleOnWheel}>
            {films?.map((film, index) => (
              <MovieView film={film} key={index} />
            ))}
          </Carousel>
        </CarouselContainer>
        <NetflixBtn setOpenPopup={setOpenPopup} />
        </Wrapper>
      </Parallax>
    </Fragment>
  );
};

export default Home;
