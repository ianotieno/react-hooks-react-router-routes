import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h1>Directors Page</h1>
    <ul>
        {directors.map((director, index) => (
          <li key={index}>
            <h2>Name: {director.name}</h2>
            <p>Movies: {director.movies.join(", ")}</p>
          </li>
        ))}
      </ul>
  </div>;
}

export default Directors;
