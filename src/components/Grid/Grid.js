import React from "react";
import { range } from "../../utils.js";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { checkGuess } from "../../game-helpers.js";

function PreviousGuesses({ guessHistory, correctAnswer }) {
  const GuessRow = ({ numGuess }) => {
    let checkedLetters;
    if (guessHistory[numGuess]) {
      const currGuess = guessHistory[numGuess];
      checkedLetters = checkGuess(currGuess, correctAnswer);
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
        // <GuessROwSameThing .. />
      ))}
    </div>
  );
}

function GuessROwSameThing() {
  let checkedLetters;
  if (guessHistory[numGuess]) {
    const currGuess = guessHistory[numGuess];
    checkedLetters = checkGuess(currGuess, correctAnswer);
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
}

export default PreviousGuesses;
