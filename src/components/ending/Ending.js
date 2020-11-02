import React, {useContext} from 'react'
import TextField from '@material-ui/core/TextField';
import QuizButton from '../common/QuizButton'

import { UsersContext } from '../contexts/UsersContext'

function Ending() {

    const {username, score, setUsername} = useContext(UsersContext)

    return (
        <div class="flex-row">
            <div class="score-panel flex-w-66">
                <p className="score-result">{score} / 10</p>
                <div class="score-text">
                    <p className="font-s-24 font-w-300">Nos félicitations ! 🥳</p>
                    <p className="font-s-24 font-w-300">On peut dire que vous êtes réellement <span className="font-up font-i font-w-700">badass</span> !</p>
                </div>
                <p className="font-s-16 font-w-300 score-sub-text">Quel est votre petit nom ? Histoire de noter votre exploit dans le livre des records !</p>
                <div class="score-name-input">
                    <TextField id="outlined-basic" label="Say my name..." variant="outlined" onChange={(event) => setUsername(event.currentTarget.value)}/>
                    <QuizButton text={"Enregistrer"} type="submit" username={username} score={score}/>
                </div>
                <div className="score-display-answers">
                    <a href="/leaderboard">Voir mes réponses en détail 👇</a>
                </div>
            </div>

            <div class="full-height flex-w-33">
                <div class="bg-accueil"></div>
            </div>
        </div>
    )
}

export default Ending