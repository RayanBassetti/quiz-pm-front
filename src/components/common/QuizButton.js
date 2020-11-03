import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import { QuizContext } from '../contexts/QuizContext';

function QuizButton({text, text_bold, smiley, route, type, username, score}) {

    const {handleProgress} = useContext(QuizContext)

    const history = useHistory()

    const handleClick = (route) => {
        history.push(route)
    }
    
    return (
        <>
        {route &&
        <button className="button-default" onClick={() => handleClick(route)}>{text} <span className="font-i font-b font-up">{text_bold}</span> {smiley}</button>
        }
        {type === "submit" &&
        <button className="button-default" onClick={() => console.log(username, score)}>{text}</button>
        }
        {type === "validate" &&
        <button className="button-default" onClick={() => handleProgress()}>{text}</button>
        }
        </>
    )
}

export default QuizButton