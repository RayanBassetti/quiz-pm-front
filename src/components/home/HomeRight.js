import React from 'react'

import QuizButton from '../common/QuizButton'

function HomeRight() {
    return (
        <div class="center-elem">
            <h1 class="font-s-40">Le quiz <span class="font-up font-i font-w-700">badass</span></h1>
            <p class="font-s-24 font-w-300">Êtes-vous assez stylé.e pour répondre à ce quiz ?</p>
            <div class="accueil-choix">
                <QuizButton text="Je réponds au quiz" text_bold="badass" smiley="💪"/>
                <a href="/leaderboard">Consulter le tableau des scores</a>
            </div>
        </div>
    )
}

export default HomeRight;