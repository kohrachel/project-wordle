import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

function PreviousGuesses({ guessHistory }) {
  const GuessRow = ({ numGuess }) => {
    return (
      <p className="guess">
        {range(5).map((_, cellIndex) => (
          <span className="cell" key={cellIndex}>
            {guessHistory[numGuess]?.[cellIndex]}
          </span>
        ))}{" "}
      </p>
    );
  };
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((numGuess) => (
        <GuessRow key={numGuess} numGuess={numGuess} />
      ))}
    </div>
  );
}

export default PreviousGuesses;
