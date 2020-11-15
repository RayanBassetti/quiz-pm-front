import React, {useContext} from 'react'
import QuizButton from '../common/QuizButton'

import {QuizContext} from '../contexts/QuizContext'

function QuizContent({quizData}) {
    const {setTemp} = useContext(QuizContext)
    const {question, answers} = quizData
    return (
        <div className="center-elem quiz-question-box">
            <h1 className="quiz-question-text">{question}</h1>
            <div className="quiz-question-answers">
                {answers.map((item, i) => <button key={i} onClick={() => setTemp(item.isCorrect)} className="quiz-question-button">{item.answer}</button>)} 
            </div>
            <QuizButton type="validate" text={"Question suivante"} className="button-validate"/>
        </div>
    )
}

export default QuizContent