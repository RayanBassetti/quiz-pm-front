import React, {useContext} from 'react'
import TextField from '@material-ui/core/TextField';
import QuizButton from '../common/QuizButton'

import { UsersContext } from '../contexts/UsersContext'

function Ending() {

    const {username, score, setUsername} = useContext(UsersContext)

    return (
        <div>
            <p>Score final : {score} / 10</p>
            <p className="font-s-24 font-w-300">Nos félicitations ! </p>
            <p className="font-s-24 font-w-300">On peut dire que vous êtes réellement <span className="font-up font-i font-w-700">badass</span>.</p>
            <TextField id="outlined-basic" label="Say my name..." variant="outlined" onChange={(event) => setUsername(event.currentTarget.value)}/>
            <QuizButton text={"Enregistrer"} type="submit" username={username} score={score}/>
            <div className="accueil-choix">
                <a href="/leaderboard">Voir mes réponses en détail</a>
            </div>
        </div>
    )
}

export default Ending