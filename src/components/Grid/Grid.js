import React from "react";
import { range } from "../../utils.js";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { checkGuess } from "../../game-helpers.js";

function PreviousGuesses({ guessHistory, correctAnswer }) {
  const GuessRow = ({ numGuess }) => {
    const currGuess = guessHistory[numGuess];
    const checkedLetters = currGuess
      ? checkGuess(currGuess, correctAnswer)
      : undefined;
    const status = checkedLetters?.[cellIndex].status;

    return (
      <p className="guess">
        {range(5).map((_, cellIndex) => (
          <span className={`cell ${status}`} key={cellIndex}>
            {currGuess?.[cellIndex]}
          </span>
        ))}{" "}
      </p>
    );
  };

  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((numGuess) => (
        <GuessRow key={numGuess} numGuess={numGuess} />
        // <GuessROwSameThing .. />
      ))}
    </div>
  );
}

export default PreviousGuesses;
