import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <h1>Name: {movie.title}</h1>
            <p>time: {movie.time}</p>
            <ul>
        {movie.genres.map((genre, genreIndex) => (
          <li key={genreIndex}>{genre}</li>
        ))}
      </ul>
          </li>
        ))}
      </ul>
  </div>;
}

export default Movies;
