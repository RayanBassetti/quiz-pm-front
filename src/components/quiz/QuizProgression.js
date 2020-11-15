import React from 'react'

function QuizProgression({quizData, progress}) {

    return (
        <div className="quiz-progression c-col-10 center-elem">  
            {quizData.map((item, i) => {
                let text = "Question"
                if(i === 10) {
                    text = "Bonus"
                }
                i === 10 ? text = "Bonus" : text = "Question"
                const question =  i === progress ? <p key={i} className="current-question">{text} {i + 1}</p> : <p key={i} className="">{text} {i + 1}</p>
                return question
            }
            )} 
        </div>
    )
}

export default QuizProgression

// si l'index est à 10 : le text doit être à bonus, et on doit rentrer dans le 