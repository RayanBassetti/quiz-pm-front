import React, { useContext, useEffect, useState } from 'react'
import QuizProgression from './QuizProgression'
import QuizContent from './QuizContent'
import { QuizContext } from '../contexts/QuizContext';

function Quiz() {
    const {quiz, progress, loadingFetch, bonus, setQuiz} = useContext(QuizContext)

    const [loadingQuiz, setLoadingQuiz] = useState(true)

    useEffect(() => {
        if(loadingQuiz) {
            let nextQuiz 
            nextQuiz = [
                ...quiz, 
                bonus
            ]  
            setQuiz(nextQuiz)
            setLoadingQuiz(false)
        }
    }, [loadingQuiz, quiz, bonus, setQuiz])
        
    return (
        <div className="quiz-display">
            {loadingFetch && loadingQuiz &&
                <p>loading...</p>
            }
            {!loadingFetch && !loadingQuiz &&
            <>
                <QuizProgression quizData={quiz} progress={progress}/>
                <QuizContent quizData={quiz[progress]}/>
            </>
            }
        </div>
    )
}

export default Quiz