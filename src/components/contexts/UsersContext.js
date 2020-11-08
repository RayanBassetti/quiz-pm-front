import React, {createContext, useState, useEffect} from 'react'

export const UsersContext = createContext()

function UsersContextProvider({children}) {

    const [score, setScore] = useState(0)
    const [username, setUsername] = useState("")
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [updated, setUpdated] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        fetchUsers()
        setUpdated(false)
    }, [updated])


    const fetchUsers = () => {
        setLoading(true)
        fetch('https://polar-ocean-73785.herokuapp.com/api/scores/10')
            .then(res => res.json())
            .then(res => {
                setUsers(res.data)
                setLoading(false)
            })
            .catch(err => console.log(err))

    }

    const createUser = (username, score) => {
        fetch(`https://polar-ocean-73785.herokuapp.com/api/scores/`, {
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
            setUpdated: setUpdated,
            createUser: createUser,
            fetchUsers: fetchUsers
        }}>
            {children}
        </UsersContext.Provider>
    )
}

export default UsersContextProvider