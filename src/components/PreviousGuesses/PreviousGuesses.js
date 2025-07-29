import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

function PreviousGuesses({ guessHistory }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((numGuess) => (
        <p className="guess" key={numGuess}>
          {range(5).map((_, cellIndex) => (
            <span className="cell" key={cellIndex}>
              {guessHistory[numGuess]?.[cellIndex]}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default PreviousGuesses;
