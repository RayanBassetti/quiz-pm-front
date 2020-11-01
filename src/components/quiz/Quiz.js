import React from 'react'
import QuizProgression from './QuizProgression'
import QuizContent from './QuizContent'

//todo : setup context pour fetch l'api et avoir les questions
function Quiz() {
    const progress = 0;
    const data = 
    [
        {	
        questionID : 1,
        question : "Intitulé de la question qui se trouve être tellement long, mais vraimeeeent, qu’il faut un ou plusieurs retours à la ligne", 
        answers : 
            [
                {
                    answer : "Une fausse réponse parmi tant d'autres, qui s'avère assez longue pour le coup", 
                    isCorrect: false
                },
                {
                    answer : "Une fausse réponse parmi tant d'autres, qui s'avère assez longue pour le coup non tu crois on va voir ça haiyaaa", 
                    isCorrect: false
                },
                {
                    answer : "Une bonne réponse parmi tant d'autres, qui s'avère assez longue pour le coup", 
                    isCorrect: true
                },
            ]
        },
        {	
        questionID : 2,
        question : "Intitulé de la question qui se trouve être tellement long, mais vraimeeeent, qu’il faut un ou plusieurs retours à la ligne", 
        answers : 
            [
                {
                    answer : "Une fausse réponse parmi tant d'autres, qui s'avère assez longue pour le coup", 
                    isCorrect: false
                },
                {
                    answer : "Une fausse réponse parmi tant d'autres, qui s'avère assez longue pour le coup", 
                    isCorrect: false
                },
                {
                    answer : "Une bonne réponse parmi tant d'autres, qui s'avère assez longue pour le coup", 
                    isCorrect: false
                },
            ]
        }
    ]
        
    return (
        <div class="quiz-display">
            <QuizProgression quizData={data}/>
            <QuizContent quizData={data[progress]}/>
        </div>
    )
}

export default Quiz