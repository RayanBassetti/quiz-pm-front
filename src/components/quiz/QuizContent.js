import React from 'react'

function QuizContent({quizData}) {
    const {question, answers, questionID} = quizData
    const handleAnswer = (bool, i) => {
        bool ? console.log("Good", questionID) : console.log("False", questionID);
    }
    return (
        <div>
            <h1>{question}</h1>
            {answers.map((item, i) => <button key={i} onClick={() => handleAnswer(item.isCorrect)}>{item.answer}</button>)} 
        </div>
    )
}

export default QuizContent