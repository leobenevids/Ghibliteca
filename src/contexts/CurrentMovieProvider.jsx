import React, { useState } from "react";
import CurrentMovieContext from "./CurrentMovieContext";

const CurrentMovieProvider = ({ children }) => {
  const [currentBanner, setCurrentBanner] = useState(
    "https://wallpaperaccess.com/full/42617.jpg"
  );

  const setBanner = (banner) => {
    setCurrentBanner(banner);
  };

  return (
    <CurrentMovieContext.Provider value={{ banner: currentBanner, setBanner }}>
      {children}
    </CurrentMovieContext.Provider>
  );
};

export default CurrentMovieProvider;
