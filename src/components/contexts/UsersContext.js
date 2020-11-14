import React, {createContext, useState, useEffect} from 'react'
import { fetching } from '../common/Methods'

export const UsersContext = createContext()

function UsersContextProvider({children}) {

    const [score, setScore] = useState(0)
    const [username, setUsername] = useState("")
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        fetchUsers()
    }, [loading])


    const fetchUsers = () => {
        setLoading(true)
        fetching('https://polar-ocean-73785.herokuapp.com/api/scores/10', setUsers)
        setLoading(false)
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
            users: users, // à utiliser pour sortir les utilisateurs de la BDD
            score: score,
            username: username,
            submitted: submitted,
            setScore: setScore,
            setUsername: setUsername,
            createUser: createUser,
            fetchUsers: fetchUsers
        }}>
            {children}
        </UsersContext.Provider>
    )
}

export default UsersContextProvider