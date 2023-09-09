import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const apiKey = "88aaa1dd7b91191e073a787cd59f7a40"; // Replace with your actual API key
  const bearerToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGFhYTFkZDdiOTExOTFlMDczYTc4N2CwvDd4";
  const apiUrl = "https://api.themoviedb.org/3/search/movie";
  const genresUrl = "https://api.themoviedb.org/3/genre/movie/list?language=en";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(apiUrl, {
          params: {
            query: searchQuery,
            api_key: apiKey,
          },
        });

        const filteredResults = response.data.results.filter((movie) => {
          return !selectedGenre || movie.genre_ids.includes(selectedGenre);
        });

        setSearchResults(filteredResults);
        setErrorMessage("");
      } catch (error) {
        console.error("Error searching for movies:", error);
        setErrorMessage("An error occurred while fetching data.");
      }
    };

    const fetchGenres = async () => {
      try {
        const response = await axios.get(genresUrl, {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        });

        setGenres(response.data.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    if (searchQuery.trim() !== "") {
      fetchMovies();
    } else {
      setSearchResults([]);
    }

    fetchGenres();
  }, [searchQuery, selectedGenre]);

  const handleGenreFilter = (genreId) => {
    setSelectedGenre(genreId);
  };

  return (
    <div className="movie-search-container">
      <h1 className="movie-search-title">Movie Search</h1>
      <div className="movie-filter-buttons">
        {genres.map((genre) => (
          <button
            key={genre.id}
            onClick={() => handleGenreFilter(genre.id)}
            className={`filter-button ${
              selectedGenre === genre.id ? "active" : ""
            }`}
          >
            {genre.name}
          </button>
        ))}
        <button
          onClick={() => setSelectedGenre(null)}
          className={`filter-button ${selectedGenre === null ? "active" : ""}`}
        >
          Clear Filter
        </button>
      </div>
      <div className="movie-search-input">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={() => setSearchQuery("")}>Clear</button>
      </div>

      <div className="movie-list">
        {searchResults.length === 0 ? (
          <p className="no-results-message">
            {errorMessage || "No results found."}
          </p>
        ) : (
          searchResults.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
              <div className="movie-details">
                <h2 className="movie-title">{movie.title}</h2>
                <p className="movie-overview">{movie.overview}</p>
                <p>
                  <strong>Release Date:</strong> {movie.release_date}
                </p>
                <p>
                  <strong>Genres:</strong>{" "}
                  {movie.genre_ids &&
                    movie.genre_ids
                      .map((genreId) => {
                        const genre = genres.find((g) => g.id === genreId);
                        return genre ? genre.name : "";
                      })
                      .join(", ")}
                </p>
                <p>
                  <strong>Vote Average:</strong> {movie.vote_average}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MovieSearch;
