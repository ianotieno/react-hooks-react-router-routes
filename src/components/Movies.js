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
            <p>genres:{movie.genres.join(",")}</p>
          </li>
        ))}
      </ul>
  </div>;
}

export default Movies;
