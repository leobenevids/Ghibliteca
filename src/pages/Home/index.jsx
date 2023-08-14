import React, { useState, useEffect, useContext } from "react";
import { getFilms } from "../../services/api";
import { Wrapper } from "./styles";
import { Fragment } from "react";
import NetflixBtn from "../../components/NetflixBtn";
import CurrentMovieContext from "../../contexts/CurrentMovieContext";
import MovieView from "../../components/MovieView";
import { Parallax } from "react-parallax";
import Select from "../../components/Select";
import Popup from "../../components/Popup";
import Loading from "../../components/Loading";
import Count from "../../components/Count";

const Home = () => {
  const { banner, setBanner, currentMovie, setCurrentMovie } =
    useContext(CurrentMovieContext);
  const [films, setFilms] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const currentFilm = films[currentIndex];

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const { data } = await getFilms();
      setFilms(data);
    } catch (error) {
      console.log(`An error occurred: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (currentFilm) {
      setCurrentMovie(currentFilm);
      setBanner(currentFilm.movie_banner);
    }
  }, [currentIndex, films]);

  return (
    <Fragment>
      <Parallax blur={10} bgImage={banner} strength={100}>
        <Wrapper>
          {loading ? (
            <Loading />
          ) : (
            <Fragment>
              <Select
                films={films}
                updateFilms={setFilms}
                position={currentIndex + 1}
                quantity={films.length}
              />
              <MovieView
                movie={currentMovie}
                movies={films}
                currIndex={currentIndex}
                setCurrIndex={setCurrentIndex}
                key={currentMovie.id}
              />
              <Count quantity={films.length} currIndex={currentIndex} setCurrIndex={setCurrentIndex}/>
              {openPopup && <Popup setOpenPopup={setOpenPopup} />}
              <NetflixBtn setOpenPopup={setOpenPopup} />
            </Fragment>
          )}
        </Wrapper>
      </Parallax>
    </Fragment>
  );
};

export default Home;
