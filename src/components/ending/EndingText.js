import React from 'react'

function EndingText({score}) {

    const handleScore = (score) => {
        if(score <= 3) {
            return (
                <>
                    <p className="font-s-24 font-w-300">Aïe !</p>
                    <p className="font-s-24 font-w-300">N'importe quel <span className="font-up font-i font-w-700">badass</span> a commencé très bas...</p>
                </>
            )
        } else if (score > 3 && score < 7) {
            return (
                <>
                    <p className="font-s-24 font-w-300">Moyen, moyen tout ça</p>
                    <p className="font-s-24 font-w-300">Devenir <span className="font-up font-i font-w-700">badass</span> demande de l'entraînement !</p>
                </>
            )
        } else if (score < 10 && score >= 7){
            return (
                <>
                    <p className="font-s-24 font-w-300">Pas mal du tout.</p>
                    <p className="font-s-24 font-w-300">Encore un petit efort pour devenir un.e <span className="font-up font-i font-w-700">badass</span> !</p>
                </>
            )
        } else if(score >= 10) {
            return (
                <>
                    <p className="font-s-24 font-w-300">Nos félicitations ! 🥳</p>
                    <p className="font-s-24 font-w-300">On peut dire que vous êtes réellement <span className="font-up font-i font-w-700">badass</span> !</p>
                </>
            )
        } else {
            <p>no text.</p>
        }

    }

    return (
        <div className="score-text">
            {handleScore(score)}
        </div>
    )
}

export default EndingText