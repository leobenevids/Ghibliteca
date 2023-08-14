import React, { useState, useEffect, useContext } from "react";
import { getFilms } from "../../services/api";
import { Wrapper, Carousel, CarouselContainer } from "./styles";
import Popup from "../../components/Popup";
import { Fragment } from "react";
import NetflixBtn from "../../components/NetflixBtn";
import CurrentMovieContext from "../../contexts/CurrentMovieContext";
import MovieView from "../../components/MovieView";
import { Parallax } from "react-parallax";
import Select from "../../components/Select";

const Home = () => {
  const { banner, setBanner, currentMovie, setCurrentMovie } = useContext(CurrentMovieContext);
  const [films, setFilms] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentFilm = films[currentIndex];
  const lastIndex = films.length - 1;

  const fetchMovies = async () => {
    try {
      const { data } = await getFilms();
      setFilms(data);
    } catch (error) {
      console.log(`An error occurred: ${error}`);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleOnWheel = ({ deltaY }) => {
    const carousel = document.querySelector(Carousel);
    deltaY > 0 ? scrollToNext(carousel) : scrollToPrevious(carousel);
  };

  const scrollToNext = (element) => {
    if (currentIndex === lastIndex) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
    element.scrollBy(500, 0);
  };

  const scrollToPrevious = (element) => {
    if (currentIndex === 0) {
      setCurrentIndex(lastIndex);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
    element.scrollBy(-500, 0);
  };

  useEffect(() => {
    if (currentFilm) {
      setCurrentMovie(currentFilm)
      setBanner(currentFilm.movie_banner);
    }
  }, [currentIndex, films]);

  return (
    <Fragment>
      <Parallax blur={10} bgImage={banner} strength={100}>
        <Wrapper>
          {films && (
            <Select
              films={films}
              updateFilms={setFilms}
              position={currentIndex+1}
              quantity={films.length}
            />
          )}
          <CarouselContainer>
            {openPopup && <Popup setOpenPopup={setOpenPopup} />}
            <Carousel onWheel={handleOnWheel}>
              {currentMovie && (
                <MovieView lastIndex={lastIndex} film={currentMovie} key={currentMovie?.id} />
              )}
            </Carousel>
          </CarouselContainer>
          <NetflixBtn setOpenPopup={setOpenPopup} />
        </Wrapper>
      </Parallax>
    </Fragment>
  );
};

export default Home;
