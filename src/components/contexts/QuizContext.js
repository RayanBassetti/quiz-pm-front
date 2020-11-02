import React, {useState, createContext, useEffect, useContext} from 'react'
import {UsersContext} from './UsersContext'

export const QuizContext = createContext()

function QuizContextProvider({children}) {
    const {score, setScore} = useContext(UsersContext)
    const [quiz, setQuiz] = useState([])
    const [temp, setTemp] = useState(false)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        fetchQuiz()
    }, [])

    const fetchQuiz = () => {
        const data = [
        {	
        questionID : 1,
        question : "Intitulé de la question qui se trouve être tellement long, mais vraimeeeent, qu’il faut un ou plusieurs retours à la ligne", 
        answers : 
            [
                {
                    answer : "Une fausse réponse parmi tant d'autres, qui s'avère assez longue pour le coup", 
                    isCorrect: false
                },
                {
                    answer : "Une fausse réponse parmi tant d'autres, qui s'avère assez longue pour le coup non tu crois on va voir ça haiyaaa", 
                    isCorrect: false
                },
                {
                    answer : "Une bonne réponse parmi tant d'autres, qui s'avère assez longue pour le coup", 
                    isCorrect: true
                },
            ]
        },
        {	
        questionID : 2,
        question : "Intitulé de la question qui se trouve être tellement long, mais vraimeeeent, qu’il faut un ou plusieurs retours à la ligne", 
        answers : 
            [
                {
                    answer : "Une fausse réponse parmi tant d'autres, qui s'avère assez longue pour le coup", 
                    isCorrect: false
                },
                {
                    answer : "Une fausse réponse parmi tant d'autres, qui s'avère assez longue pour le coup", 
                    isCorrect: false
                },
                {
                    answer : "Une bonne réponse parmi tant d'autres, qui s'avère assez longue pour le coup", 
                    isCorrect: true
                },
            ]
        }
        ]
        setQuiz(data)
    }

    const handleProgress = () => {
        if(temp) {
            setScore(score + 1)
            setTemp(false)
        }
        setProgress(progress + 1)
        setTemp(false)
    }

    return (
        <QuizContext.Provider value={{
            quiz: quiz,
            progress: progress,
            setTemp: setTemp,
            handleProgress: handleProgress
        }}>
            {children}
        </QuizContext.Provider>
    )
} 

export default QuizContextProvider