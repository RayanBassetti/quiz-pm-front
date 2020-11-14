import React, {createContext, useState, useEffect} from 'react'
import { fetching } from '../common/Methods'

export const UsersContext = createContext()

function UsersContextProvider({children}) {

    const [score, setScore] = useState(0)
    const [username, setUsername] = useState("")
    const [users, setUsers] = useState([])
    const [leaderboard, setLeaderboard] = useState("popcorn")
    const [loading, setLoading] = useState(true)
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        fetchUsers(leaderboard)
    }, [leaderboard])


    const fetchUsers = (leaderboard) => {
        setLoading(true)
        if(leaderboard === "badass") {
            fetching(setLoading, 'https://polar-ocean-73785.herokuapp.com/api/scores/10', setUsers)
        } else if(leaderboard === "pursuit") {
            fetching(setLoading, 'https://stagingquizzpursuit.herokuapp.com/api/scores/10', setUsers)
        } else if(leaderboard === "adley") {
            fetching(setLoading, 'https://adley-quizz.herokuapp.com/api/scores/10', setUsers)
        } else if(leaderboard === "popcorn") {
            fetching(setLoading, 'https://wsf-popcorn-backend.herokuapp.com/api/scores/10', setUsers)
        } else {
            setUsers({"error" : "empty"})
        }
    }

    const createUser = (username, score) => {
        fetch(`https://polar-ocean-73785.herokuapp.com/score`, {
            method: 'POST',
            body: JSON.stringify({
                "username": username,
                "score": score    
            }),
            headers: {
            "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => console.log(res))
        .then(setSubmitted(true))
        .catch(err => console.log(err))
    }

    return (
        <UsersContext.Provider value={{
            loading: loading, // à utiliser pour chargement des utilisateurs
            users: users,
            score: score,
            username: username,
            leaderboard: leaderboard,
            submitted: submitted,
            setScore: setScore,
            setUsername: setUsername,
            createUser: createUser,
            fetchUsers: fetchUsers,
            setLeaderboard: setLeaderboard
        }}>
            {children}
        </UsersContext.Provider>
    )
}

export default UsersContextProvider