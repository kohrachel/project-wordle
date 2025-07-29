import React from "react";

function PreviousGuesses({ guessHistory }) {
  return (
    <div className="guess-results">
      {guessHistory.map((guess) => (
        <p className="guess">{guess}</p>
      ))}
    </div>
  );
}

export default PreviousGuesses;
