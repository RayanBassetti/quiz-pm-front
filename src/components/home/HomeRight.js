import React, { useContext } from 'react'

import QuizButton from '../common/QuizButton'
import { QuizContext } from '../contexts/QuizContext';

function HomeRight() {

    const {bonusSource} = useContext(QuizContext)

    return (
        <div className="center-elem">
            <h1 className="font-s-40">Le quiz <span className="font-up font-i font-w-700">badass</span></h1>
            <h1 className="font-s-20">En feat avec :  <span className="font-up font-i font-w-700">{bonusSource}</span></h1>
            <p className="font-s-24 font-w-300">Êtes-vous assez stylé.e pour répondre à ce quiz ?</p>
            <div className="accueil-choix">
                <QuizButton text="Je réponds au quiz" text_bold="badass" smiley="💪" route="/quiz"/>
                <a href="/leaderboard">Consulter le tableau des scores</a>
            </div>
        </div>
    )
}

export default HomeRight;