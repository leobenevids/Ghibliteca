import React from "react";
import Home from "./pages/Home";
import CurrentMovieProvider from "./contexts/CurrentMovieProvider";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <CurrentMovieProvider>
      <GlobalStyles />
      <Home />
    </CurrentMovieProvider>
  );
}

export default App;
