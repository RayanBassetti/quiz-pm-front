import React, { useContext } from 'react'
import QuizProgression from './QuizProgression'
import QuizContent from './QuizContent'
import { QuizContext } from '../contexts/QuizContext';
import QuizButton from '../common/QuizButton';

//todo : setup context pour fetch l'api et avoir les questions
function Quiz() {
    const {quiz, progress} = useContext(QuizContext)
        
    return (
        <div class="quiz-display">
            <QuizProgression quizData={quiz}/>
            {quiz[progress] &&
            <QuizContent quizData={quiz[progress]}/>
            }
            {!quiz[progress] &&
                <div class="center-elem quiz-question-box">
                    <QuizButton route="/ending" text={"Valider les réponses"} class="button-validate"/>
                </div>
            }
        </div>
    )
}

export default Quiz