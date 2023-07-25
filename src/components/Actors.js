import React from "react";
import { actors } from "../data"; // Import the actors array

function Actors() {
  // Use the actors array to display information
  return (
    <div>
      <h1>Actors Page</h1>
      <ul>
        {actors.map((actor, index) => (
          <li key={index}>
            <h2>Name: {actor.name}</h2>
            <p>Movies: {actor.movies.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Actors;
