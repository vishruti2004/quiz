import React  from "react";

const Question = ((question,Option,handleAnswer)=>
{
    return(
    <>
        <div className="question">
      <h2>{question.text}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <Option
            key={index}
            text={option.text}
            isCorrect={option.isCorrect}
            handleAnswer={handleAnswer}
          />
        ))}
      </div>
    </div>
    </>
    )
})

export default Question;