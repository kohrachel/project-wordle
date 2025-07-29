import React from "react";

function PreviousGuesses({ guessHistory }) {
  return (
    <div className="guess-results">
      {guessHistory.map(({ id, label }) => (
        <p key={id} className="guess">
          {label}
        </p>
      ))}
    </div>
  );
}

export default PreviousGuesses;
