import React, {useState, createContext, useEffect, useContext} from 'react'
import {UsersContext} from './UsersContext'
import {fetching} from '../common/Methods'
export const QuizContext = createContext()

function QuizContextProvider({children}) {
    const {score, setScore} = useContext(UsersContext)
    const [quiz, setQuiz] = useState([])
    const [bonus, setBonus] = useState([])
    const [temp, setTemp] = useState(false)
    const [loading, setLoading] = useState(true)
    const [progress, setProgress] = useState(0)

    useEffect(() => {    
        const fetchQuiz = () => {
            if(loading === true) {
                fetching('https://polar-ocean-73785.herokuapp.com/api/questions/10', setQuiz, setLoading)
                let rand = Math.floor(Math.random() * 3)
                if(rand === 0) {
                    // setBonusSource("Quiz Pursuit")
                    fetching('https://stagingquizzpursuit.herokuapp.com/api/questions/random', setBonus, setLoading)
                } else if(rand === 1) {
                    // setBonusSource("Adley Quiz")
                    fetching('https://adley-quizz.herokuapp.com/api/questions/random', setBonus, setLoading)
                } else if(rand === 2) {
                    // setBonusSource("WSF Popcorn")
                    fetching('https://wsf-popcorn-backend.herokuapp.com/api/questions/random', setBonus, setLoading)
                } else {
                    console.log("erreur randomvar")
                }
            }
        }
        fetchQuiz()
    }, [loading])

    const handleAnswer = () => {
        if(temp) {
            setScore(score + 1)
            setTemp(false)
            return false
        }
        setTemp(false)
    }

    return (
        <QuizContext.Provider value={{
            loading: loading,
            quiz: quiz,
            bonus: bonus,
            progress: progress,
            setTemp: setTemp,
            setProgress: setProgress,
            handleAnswer: handleAnswer
        }}>
            {children}
        </QuizContext.Provider>
    )
} 

export default QuizContextProvider