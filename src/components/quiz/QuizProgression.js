import React from 'react'

function QuizProgression({quizData, progress}) {

    return (
        <div class="quiz-progression c-col-10 center-elem">  
            {quizData.map((item, i) => i === progress ?  <p key={i} class="current-question">Question {item.questionID}</p> : <p key={i} class="">Question {item.questionID}</p>)} 
        </div>
    )
}

export default QuizProgression