import React from 'react'

function QuizProgression({quizData, progress}) {

    return (
        <div className="quiz-progression c-col-10 center-elem">  
            {quizData.map((item, i) => i === progress ?  <p key={i} className="current-question">Question {item.questionID}</p> : <p key={i} className="">Question {item.questionID}</p>)} 
        </div>
    )
}

export default QuizProgression