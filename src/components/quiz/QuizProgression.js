import React from 'react'

function QuizProgression({quizData}) {

    return (
        <div>  
            {/* afficher les composants ci-dessous en colonne, et seulement sur Desktop */}
            {quizData.map((item, i) => <p key={i}>Question {item.questionID}</p>)} 
            {/* créer un composant pour afficher l'intitulé des questions corréctement */}
        </div>
    )
}

export default QuizProgression