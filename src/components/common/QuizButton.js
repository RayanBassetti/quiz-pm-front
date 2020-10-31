import React from 'react'

function QuizButton({text, text_bold, smiley}) {
    return (
        <button class="button-default">{text} <span class="font-i font-b font-up">{text_bold}</span> {smiley}</button>
    )
}

export default QuizButton