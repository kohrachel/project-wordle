import React from "react";
import { range } from "../../utils";

const NUM_ROWS = 6;
const NUM_COLS = 5;

function PreviousGuesses({ guessHistory }) {
  return (
    <div className="guess-results">
      {range(NUM_ROWS).map((numGuess, index) => (
        <p className="guess" key={index}>
          {range(NUM_COLS).map((_, index) => (
            <span className="cell" key={index}>
              {guessHistory[numGuess]?.[index]}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default PreviousGuesses;
