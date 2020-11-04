import React, { useContext } from 'react'
import QuizProgression from './QuizProgression'
import QuizContent from './QuizContent'
import { QuizContext } from '../contexts/QuizContext';

//todo : setup context pour fetch l'api et avoir les questions
function Quiz() {
    const {quiz, progress, loading} = useContext(QuizContext)
        
    return (
        <div className="quiz-display">
            {loading &&
                <p>loading...</p>
            }
            {!loading &&
            <>
                <QuizProgression quizData={quiz} progress={progress}/>
                <QuizContent quizData={quiz[progress]}/>
            </>
            }
        </div>
    )
}

export default Quiz