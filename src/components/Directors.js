import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h1>Directors Page</h1>
    <ul>
        {directors.map((director, index) => (
          <li key={index}>
            <h2>Name: {director.name}</h2>
            <ul>{director.movies.map((movie,index)=>(
              <li key={index}>{movie}</li>
            ))}</ul>
          </li>
        ))}
      </ul>
  </div>;
}

export default Directors;
