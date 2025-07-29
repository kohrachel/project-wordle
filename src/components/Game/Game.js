import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Guess from "../Guess/Guess";
import PreviousGuesses from "../PreviousGuesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessHistory, setGuessHistory] = useState([]);
  const handleSubmitGuess = (guess) => {
    setGuessHistory((prevGuessHistory) => [...prevGuessHistory, guess]);
  };
  return (
    <>
      <PreviousGuesses guessHistory={guessHistory} />
      <Guess handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
