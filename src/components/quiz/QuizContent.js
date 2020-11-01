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
        <div class="center-elem quiz-question-box">
            <h1 class="quiz-question-text">{question}</h1>
            <div class="quiz-question-answers">
                {answers.map((item, i) => <button key={i} onClick={() => handleAnswer(item.isCorrect)} class="quiz-question-button">{item.answer}</button>)} 
            </div>
            <QuizButton route="/ending" text={"Valider les réponses"} class="button-validate"/>
        </div>
    )
}

export default QuizContent