import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./Movies.css";
import Movie from "./Components/Movie";
import MovieSearch from "./Components/MovieSearch";
import "./MovieSearch.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Movie />} />
          <Route path="/search" element={<MovieSearch />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
