import React from 'react';

const Option = ({ text, isCorrect, handleAnswer }) => {
  return (
    <button onClick={() => handleAnswer(isCorrect)}>{text}</button>
  );
};

export default Option;
