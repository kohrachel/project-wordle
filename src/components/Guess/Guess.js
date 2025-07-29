import React, { useState } from "react";

function Guess({ guess, setGuess, setGuessHistory }) {
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        if (guess.length !== 5) {
          return;
        }
        setGuessHistory((prevGuessHistory) => [...prevGuessHistory, guess]);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        required
        type="text"
        value={guess}
        minLength={5}
        maxLength={5}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default Guess;
