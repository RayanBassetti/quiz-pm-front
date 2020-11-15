import React, {useContext} from 'react'
import TextField from '@material-ui/core/TextField';
import QuizButton from '../common/QuizButton'
import AnswerDetails from './AnswersDetails'

import { UsersContext } from '../contexts/UsersContext'
import Background from '../common/Background';
import EndingText from './EndingText';

function Ending() {

    const {score, setUsername, submitted} = useContext(UsersContext)

    return (
        <>
            <div className="flex-row">
                <div className="score-panel flex-w-66">
                    <p className="score-result">{score} / 10</p>
                    <EndingText score={score}/>
                    <p className="font-s-16 font-w-300 score-sub-text">Quel est votre petit nom ? Histoire de noter votre exploit dans le livre des records !</p>
                    {!submitted &&
                    <div className="score-name-input">
                        <TextField id="outlined-basic" label="Say my name..." variant="outlined" onChange={(event) => setUsername(event.currentTarget.value)}/>
                        <QuizButton text={"Enregistrer"} type="submit"/>
                    </div>
                    }
                    {submitted &&
                    <div className="score-name-input">
                        <p className="font-s-16 font-w-300 score-sub-text">Merci à toi ! On se retrouve dans le leaderboard !</p>
                    </div>
                    }
                    <div className="score-display-answers">
                        <a href="#answers-details">Voir mes réponses en détail 👇</a>
                    </div>
                </div>

                <div className="full-height flex-w-33">
                    <Background />
                </div>
            </div>
            <AnswerDetails />
        </>
    )
}

export default Ending