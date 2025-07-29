import React, { useState, useEffect } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Guess from "../Guess/Guess";
import Grid from "../Grid";
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessHistory, setGuessHistory] = useState([]);

  const handleSubmitGuess = (guess) => {
    setGuessHistory((prevGuessHistory) => [...prevGuessHistory, guess]);
  };

  const mostRecentGuess = guessHistory.at(-1);
  const numGuesses = guessHistory.length;
  const isCorrectGuess = mostRecentGuess === answer;
  const gameOver = numGuesses > 5 || isCorrectGuess;

  return (
    <>
      <Grid guessHistory={guessHistory} correctAnswer={answer} />
      <Guess handleSubmitGuess={handleSubmitGuess} />
      {gameOver ? (
        <Banner
          wonGame={isCorrectGuess}
          numGuesses={numGuesses}
          answer={answer}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default Game;
