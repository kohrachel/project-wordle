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
  const [guess, setGuess] = useState("");
  const [guessHistory, setGuessHistory] = useState([]);
  return (
    <>
      <PreviousGuesses guessHistory={guessHistory} />
      <Guess
        guess={guess}
        setGuess={setGuess}
        setGuessHistory={setGuessHistory}
      />
    </>
  );
}

export default Game;
