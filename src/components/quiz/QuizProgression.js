import React from 'react'

function QuizProgression({quizData}) {

    return (
        <>
        {quizData.map((item, i) => <p>Question {item.questionID}</p>)} 
        </>
    )
}

export default QuizProgression