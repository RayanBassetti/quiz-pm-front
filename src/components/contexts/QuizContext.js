import React, {useState, createContext, useEffect} from 'react'
import { useHistory } from "react-router-dom";


export const QuizContext = createContext()

function QuizContextProvider({children}) {
    const [quiz, setQuiz] = useState([])
    const [progress, setProgress] = useState(0)
    const history = useHistory()

    useEffect(() => {
        fetchQuiz()
    }, [])

    const fetchQuiz = () => {
        const data = 
    [
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
        setProgress(progress + 1)
        let qlength = quiz.length
        let trueProgress = progress + 1
        if (trueProgress > qlength) {
            history.push("/ending")
        }
        console.log(qlength)
    }
    return (
        <QuizContext.Provider value={{
            quiz: quiz,
            progress: progress,
            handleProgress: handleProgress
        }}>
            {children}
        </QuizContext.Provider>
    )
} 

export default QuizContextProvider