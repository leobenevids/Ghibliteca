import React from "react";
import { SelectWrapper } from "./styles";
import { useRef } from "react";
import { useEffect } from "react";
import Title from "../Title";

const Select = ({ films, updateFilms, position, quantity }) => {
  const selectRef = useRef(null);

  useEffect(() => {
    if (selectRef.current) {
      const selectedOptionText =
        selectRef.current.options[selectRef.current.selectedIndex].text;
      let textWidth = selectedOptionText.length * 10;
      textWidth = Math.min(Math.max(textWidth, 60), 190);
      selectRef.current.style.width = `${textWidth}px`;
    }
  }, [films]);

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
      <span>
        movie {position}/{quantity}
      </span>
      <label htmlFor="sortSelect"> sorted by:</label>
      <select id="sortSelect" ref={selectRef} onChange={handleOptionChange}>
        <option value="release_date">Release Date</option>
        <option value="title">Title</option>
        <option value="rt_score">Rotten Tomatoes Score</option>
      </select>
    </SelectWrapper>
  );
};

export default Select;
