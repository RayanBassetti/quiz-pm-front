import React, {useContext} from 'react'
import { QuizContext } from '../contexts/QuizContext'

function AnswersDetails() {

    const {quiz} = useContext(QuizContext)

    const handleQuiz = (quiz) => {
        const quizElements = []
        quiz.forEach(question => {
            quizElements.push(
                <div className="answers-question-details" key={question.questionID}>
                    <p>{question.question}</p>
                    <ul>
                        {question.answers.map((item, i) => {
                            return item.isCorrect ? <li key={i} className={"answers-question-correct"}>{item.answer}</li> : <li key={i}>{item.answer}</li> /* answers-question-wrong */
                        })}
                    </ul>
                </div>
            )
        })
        return quizElements
    }

    return (
        <>
            <div className="answers-details" id="answers-details">
                {handleQuiz(quiz)}
            </div>
        </>
    )
}

export default AnswersDetails