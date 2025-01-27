import React from 'react';

const Score = ({ score, totalQuestions }) => {
  return (
    <div className="score">
      <h1>Your Score</h1>
      <p>
        {score} out of {totalQuestions}
      </p>
    </div>
  );
};

export default Score;
