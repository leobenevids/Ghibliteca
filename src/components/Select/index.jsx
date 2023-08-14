import React from "react";
import { SelectWrapper } from "./styles";
import Title from "../Title";

const Select = ({ films, updateFilms }) => {
  const handleOptionChange = ({ target }) => {
    const filter = target.value;
    let sortedFilms = [...films];
    if (filter === "release_date") {
      sortedFilms.sort((a, b) => a.release_date.localeCompare(b.release_date));
    }
    if (filter === "title") {
      sortedFilms.sort((a, b) => a.title.localeCompare(b.title));
    } else if (filter === "rt_score") {
      sortedFilms.sort((a, b) => a.rt_score - b.rt_score);
    }
    updateFilms(sortedFilms);
  };

  return (
    <SelectWrapper>
      <Title />
      <label htmlFor="sortSelect"> sorted by</label>
      <select id="sortSelect" onChange={handleOptionChange}>
        <option value="release_date">Release Date</option>
        <option value="title">Title</option>
        <option value="rt_score">Rotten Tomatoes Score</option>
      </select>
    </SelectWrapper>
  );
};

export default Select;
