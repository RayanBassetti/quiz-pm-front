import React from 'react'
import { useHistory } from "react-router-dom";

function QuizButton({text, text_bold, smiley, route, type}) {

    const history = useHistory()

    const handleClick = (route) => {
        history.push(route)
    }

    const handleSubmit = (content) => {
        console.log(content)
    }
    
    return (
        <>
        {smiley &&
        <button class="button-default" onClick={() => handleClick(route)}>{text} <span class="font-i font-b font-up">{text_bold}</span> {smiley}</button>
        }
        {type === "submit" &&
        <button class="button-default" onClick={() => handleSubmit(route)}>{text} <span class="font-i font-b font-up">{text_bold}</span> {smiley}</button>
        }
        </>
    )
}

export default QuizButton