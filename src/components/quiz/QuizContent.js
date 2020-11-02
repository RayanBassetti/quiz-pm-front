import React, {useContext} from 'react'
import QuizButton from '../common/QuizButton'

import {QuizContext} from '../contexts/QuizContext'

function QuizContent({quizData}) {
    const {setTemp} = useContext(QuizContext)
    const {question, answers} = quizData
    return (
        <div class="center-elem quiz-question-box">
            <h1 class="quiz-question-text">{question}</h1>
            <div class="quiz-question-answers">
                {answers.map((item, i) => <button key={i} onClick={() => setTemp(item.isCorrect)} class="quiz-question-button">{item.answer}</button>)} 
            </div>
            <QuizButton type="validate" text={"Question suivante"} class="button-validate"/>
        </div>
    )
}

export default QuizContent