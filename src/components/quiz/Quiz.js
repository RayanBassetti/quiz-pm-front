import React, { useContext } from 'react'
import QuizProgression from './QuizProgression'
import QuizContent from './QuizContent'
import { QuizContext } from '../contexts/QuizContext';
import QuizButton from '../common/QuizButton';

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
                {quiz[progress] &&
                <QuizContent quizData={quiz[progress]}/>
                }
                {!quiz[progress] &&
                    <div className="center-elem quiz-question-box">
                        <QuizButton route="/ending" text={"Valider les réponses"} className="button-validate"/>
                    </div>
                }
            </>
            }
        </div>
    )
}

export default Quiz