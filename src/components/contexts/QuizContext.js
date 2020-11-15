import React, {useState, createContext, useEffect, useContext} from 'react'
import {UsersContext} from './UsersContext'
import {fetching} from '../common/Methods'
export const QuizContext = createContext()

function QuizContextProvider({children}) {
    const {score, setScore} = useContext(UsersContext)
    const [quiz, setQuiz] = useState([])
    const [bonus, setBonus] = useState([])
    const [temp, setTemp] = useState(false)
    const [loadingFetch, setLoadingFetch] = useState(true)
    const [progress, setProgress] = useState(0)
    const [bonusSource, setBonusSource] = useState("")

    useEffect(() => {    
        const fetchQuiz = () => {
            if(loadingFetch === true) {
                fetching('https://polar-ocean-73785.herokuapp.com/api/questions/10', setQuiz, setLoadingFetch)
                fetching('https://wsf-popcorn-backend.herokuapp.com/api/questions/random', setBonus, setLoadingFetch)
                setBonusSource("WSF Popcorn")
                // let rand = Math.floor(Math.random() * 3)
                // if(rand === 0) {
                //     setBonusSource("Quiz Pursuit")
                //     fetching('https://stagingquizzpursuit.herokuapp.com/api/questions/random', setBonus, setLoadingFetch)
                // } else if(rand === 1) {
                //     setBonusSource("Adley Quiz")
                //     fetching('https://adley-quizz.herokuapp.com/api/questions/random', setBonus, setLoadingFetch)
                // } else if(rand === 2) {
                //     setBonusSource("WSF Popcorn")
                //     fetching('https://wsf-popcorn-backend.herokuapp.com/api/questions/random', setBonus, setLoadingFetch)
                // } else {
                //     console.log("erreur randomvar")
                // }
            }
            
        }
        fetchQuiz()
    }, [loadingFetch])

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
            loadingFetch: loadingFetch,
            quiz: quiz,
            bonus: bonus,
            progress: progress,
            bonusSource: bonusSource,
            setTemp: setTemp,
            setQuiz: setQuiz,
            setProgress: setProgress,
            handleAnswer: handleAnswer
        }}>
            {children}
        </QuizContext.Provider>
    )
} 

export default QuizContextProvider