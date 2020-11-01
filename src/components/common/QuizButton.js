import React from 'react'
import { useHistory } from "react-router-dom";

function QuizButton({text, text_bold, smiley, route, type, username, score}) {

    const history = useHistory()

    const handleClick = (route) => {
        history.push(route)
    }
    
    return (
        <>
        {route &&
        <button class="button-default" onClick={() => handleClick(route)}>{text} <span class="font-i font-b font-up">{text_bold}</span> {smiley}</button>
        }
        {type === "submit" &&
        <button class="button-default" onClick={() => console.log(username, score)}>{text}</button>
        }
        </>
    )
}

export default QuizButton