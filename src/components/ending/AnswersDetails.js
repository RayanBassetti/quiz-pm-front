import React, {useContext} from 'react'
import { QuizContext } from '../contexts/QuizContext'

function AnswersDetails() {

    const {quiz} = useContext(QuizContext)

    const handleQuiz = (quiz) => {
        const quizElements = []
        quiz.forEach(question => {
            quizElements.push(
                <div className="answers-details" id="answers-details" key={question.questionID}>
                    <div className="answers-question-details">
                        <p>{question.question}</p>
                        <ul>
                            {question.answers.map((item, i) => {
                                return item.isCorrect ? <li key={i} className={"answers-question-correct"}>{item.answer}</li> : <li key={i}>{item.answer}</li>
                            })}
                        </ul>
                    </div>
                </div>
            )
        })
        return quizElements
    }

    return (
        <>
        {handleQuiz(quiz)}
        </>
    )
}

export default AnswersDetails