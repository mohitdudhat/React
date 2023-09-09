import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const apiKey = "88aaa1dd7b91191e073a787cd59f7a40";
    const apiUrl = `https://api.themoviedb.org/3/discover/movie`;
    const genresUrl = `https://api.themoviedb.org/3/genre/movie/list`;

    const bearerToken =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGFhYTFkZDdiOTExOTFlMDczYTc4N2NkNTlmN2E0MCIsInN1YiI6IjY0ZjVhN2M1NWYyYjhkMDBjNDMzZWZmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ptg13N8LthU7AKfXYfsVaNAV3m7AcUFgOz6-ccwvDd4";

    // Define request headers with bearer token
    const headers = {
      Authorization: `Bearer ${bearerToken}`,
    };

    // Fetch movie genres first
    axios
      .get(genresUrl, { headers })
      .then((genresResponse) => {
        const genreMap = new Map();
        genresResponse.data.genres.forEach((genre) => {
          genreMap.set(genre.id, genre.name);
        });

        // Once genres are fetched, fetch movies with bearer token
        axios
          .get(apiUrl, {
            params: {
              api_key: apiKey,
            },
            headers, // Include bearer token in headers
          })
          .then((moviesResponse) => {
            const moviesWithGenres = moviesResponse.data.results.map(
              (movie) => ({
                ...movie,
                genres: movie.genre_ids.map((genreId) => genreMap.get(genreId)),
              })
            );

            setMovies(moviesWithGenres);
            console.log(moviesResponse.data);
          })
          .catch((moviesError) => {
            console.error("Error fetching movie data:", moviesError);
          });
      })
      .catch((genresError) => {
        console.error("Error fetching genres data:", genresError);
      });
  }, []);

  return (
    <div className="movies-container">
      <div className="movies-header">
        <h1 className="movies-heading">Popular Movies</h1>
        <Link to="/search" className="search-button">
          Search
        </Link>{" "}
        {/* Add Link to "/search" */}
      </div>
      <div className="movies-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <div className="movie-details">
              <h2 className="movie-title">{movie.title}</h2>
              <p className="movie-overview">{movie.overview}</p>
              <div className="movie-metadata">
                <p>
                  <strong>Release Date:</strong> {movie.release_date}
                </p>
                <p>
                  <strong>Genres:</strong> {movie.genres.join(", ")}
                </p>
                <p>
                  <strong>Vote Average:</strong> {movie.vote_average}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
