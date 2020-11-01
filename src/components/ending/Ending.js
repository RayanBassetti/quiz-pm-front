import React from 'react'
import TextField from '@material-ui/core/TextField';
import QuizButton from '../common/QuizButton'

function Ending() {
    return (
        <div>
            <p class="font-s-24 font-w-300">Nos félicitations ! </p>
            <p class="font-s-24 font-w-300">On peut dire que vous êtes réellement <span class="font-up font-i font-w-700">badass</span>.</p>
            <TextField id="outlined-basic" label="Say my name..." variant="outlined" />
            <QuizButton text={"Enregistrer"} type="submit"/>
            <div class="accueil-choix">
                <a href="/leaderboard">Voir mes réponses en détail</a>
            </div>
        </div>
    )
}

export default Ending