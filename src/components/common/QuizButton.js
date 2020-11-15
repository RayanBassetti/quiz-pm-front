import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import { QuizContext } from '../contexts/QuizContext';
import { UsersContext } from '../contexts/UsersContext';

function QuizButton({text, text_bold, smiley, route, type, username, score}) {

    const {quiz, progress, setProgress, handleAnswer} = useContext(QuizContext)
    const {createUser} = useContext(UsersContext)

    const history = useHistory()

    const handleClick = (route) => {
        history.push(route)
    }

    const handleQuiz = () => {
        handleAnswer()
        handleProgress()
    }

    const handleProgress = () => {
        if(progress + 1 === quiz.length) {
            history.push("/ending")
        } else {
            setProgress(progress + 1)
        }
    }

    
    return (
        <>
        {route &&
        <button className="button-default" onClick={() => handleClick(route)}>{text} <span className="font-i font-b font-up">{text_bold}</span> {smiley}</button>
        }
        {type === "submit" &&
        <button className="button-default" onClick={() => createUser(username, score)}>{text}</button>
        }
        {type === "validate" &&
        <button className="button-default" onClick={() => handleQuiz()}>{text}</button>
        }
        </>
    )
}

export default QuizButton