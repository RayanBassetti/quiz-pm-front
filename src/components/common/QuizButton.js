import React from 'react'
import { useHistory } from "react-router-dom";

function QuizButton({text, text_bold, smiley, route}) {

    const history = useHistory()

    const handleClick = (route) => {
        history.push(route)
    }
    
    return (
        <button class="button-default" onClick={() => handleClick(route)}>{text} <span class="font-i font-b font-up">{text_bold}</span> {smiley}</button>
    )
}

export default QuizButton