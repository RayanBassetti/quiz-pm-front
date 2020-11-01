import React, {useContext} from 'react'
import QuizButton from '../common/QuizButton'

import {UsersContext} from '../contexts/UsersContext'

function QuizContent({quizData}) {
    const {score, setScore} = useContext(UsersContext)
    const {question, answers} = quizData
    const handleAnswer = (bool, i) => {
        if(bool) {
            setScore(score + 1)
            console.log("Good", score) 
        } else {
            console.log("False", score) 
        }
        
    }
    return (
        <div>
            <h1>{question}</h1>
            {answers.map((item, i) => <button key={i} onClick={() => handleAnswer(item.isCorrect)}>{item.answer}</button>)} 
            <QuizButton route="/ending" text={"Go to ending"} />
            <h1>AZE</h1>
        </div>
    )
}

export default QuizContent