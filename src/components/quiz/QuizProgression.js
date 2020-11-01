import React from 'react'

function QuizProgression({quizLength}) {
    const length = quizLength.length
    console.log(length)
    return (
        <ul>
            <li>Question 1</li>
            <li>Question 2</li>
            <li>Question 3</li>
        </ul>
    )
}

export default QuizProgression