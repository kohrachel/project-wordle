import React from "react";
import { range } from "../../utils";

const NUM_ROWS = 6;
const NUM_COLS = 5;

function PreviousGuesses({ guessHistory }) {
  return (
    <div className="guess-results">
      {range(0, NUM_ROWS).map((numGuess, index) => (
        <p className="guess" key={index}>
          {guessHistory[numGuess]
            ? range(0, NUM_COLS).map((_, index) => (
                <span className="cell" key={index}>
                  {guessHistory[numGuess].label[index]}
                </span>
              ))
            : range(0, NUM_COLS).map((_, index) => (
                <span className="cell" key={index}></span>
              ))}
        </p>
      ))}
    </div>
  );
}

export default PreviousGuesses;
