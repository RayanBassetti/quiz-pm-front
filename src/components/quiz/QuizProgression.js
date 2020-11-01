import React from 'react'

function QuizProgression({quizData}) {

    return (
        <div class="quiz-progression c-col-10 center-elem">  
            {/* afficher les composants ci-dessous en colonne, et seulement sur Desktop */}
            {quizData.map((item, i) => <p key={i} class="current-question">Question {item.questionID}</p>)} 
            {/* créer un composant pour afficher l'intitulé des questions corréctement */}
        </div>
    )
}

export default QuizProgression