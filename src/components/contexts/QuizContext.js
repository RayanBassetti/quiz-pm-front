import React, {useState, createContext} from 'react'

export const QuizContext = createContext()

function QuizContextProvider({children}) {
    return (
        <QuizContext.Provider>
            {children}
        </QuizContext.Provider>
    )
} 

export default QuizContextProvider