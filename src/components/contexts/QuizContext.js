import React, {useState, createContext, useEffect, useContext} from 'react'
import {UsersContext} from './UsersContext'

export const QuizContext = createContext()

function QuizContextProvider({children}) {
    const {score, setScore} = useContext(UsersContext)
    const [quiz, setQuiz] = useState([])
    const [temp, setTemp] = useState(false)
    const [loading, setLoading] = useState(true)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        fetchQuiz()
    }, [])

    const fetchQuiz = () => {
        fetch('https://polar-ocean-73785.herokuapp.com/api/questions/10')
            .then(res => res.json())
            .then(res => {
                setQuiz(res.data)
                setLoading(false)
            })
            .catch(err => console.log(err))
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
            loading: loading,
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