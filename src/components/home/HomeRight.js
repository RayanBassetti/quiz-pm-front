import React from 'react'

import QuizButton from '../common/QuizButton'

function HomeRight() {
    return (
        <div>
            <h1>Le quiz badass</h1>
            <p>Etes-vous assez stylé.e pour répondre à ce quiz ?</p>
            <QuizButton text="Je réponds au quiz" text_bold="BADASS"/>
            <a href="https://www.youtube.com">Consulter le tableau des scores</a>
        </div>
    )
}

export default HomeRight;