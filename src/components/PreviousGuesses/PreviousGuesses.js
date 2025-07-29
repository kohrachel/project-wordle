import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { checkGuess } from "../../game-helpers.js";

function PreviousGuesses({ guessHistory, correctAnswer }) {
  const GuessRow = ({ numGuess }) => {
    let checkedLetters;
    if (guessHistory[numGuess]) {
      checkedLetters = checkGuess(guessHistory[numGuess], correctAnswer);
    }
    return (
      <p className="guess">
        {range(5).map((_, cellIndex) => (
          <span
            className={`cell ${
              checkedLetters ? checkedLetters[cellIndex].status : ""
            }`}
            key={cellIndex}
          >
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

{
  /* <p class="guess">
  <span class="cell incorrect">W</span>
  <span class="cell incorrect">H</span>
  <span class="cell correct">A</span>
  <span class="cell misplaced">L</span>
  <span class="cell misplaced">E</span>
</p> */
}

export default PreviousGuesses;
