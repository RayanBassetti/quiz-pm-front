import React, {createContext, useState, useEffect} from 'react'

export const UsersContext = createContext()

function UsersContextProvider({children}) {

    const [score, setScore] = useState(0)
    const [username, setUsername] = useState("")
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [updated, setUpdated] = useState(false)

    useEffect(() => {
        fetchUsers()
        setUpdated(false)
    }, [updated])


    const fetchUsers = () => {
        // setLoading(true)
        // fetch('https://endpoint/users')
        //     .then(res => res.json())
        //     .then(res => {
        //         setAlertes(res.data)
        //         setLoading(false)
        //     })
        setLoading(true)
        const data = [
            {
                "username": "RayanJenkins",
                "score": 20
            },
            {
                "username": "Latonal",
                "score": 12
            },
            {
                "username": "Ludion",
                "score": 1
            }
        ]
        setUsers(data)
        setLoading(false)
    }

    const createUser = () => {
        console.log(username, score)
        // fetch(`http://endpoint/users`, {
        //     method: 'POST',
        //     body: JSON.stringify({
        //      "username": username,
        //        "score": score    
        //}),
        //     headers: {
        //     "Content-type": "application/json; charset=UTF-8"
        //     }
        // })
        // .then(this.setState({
        //     submitted: true
        // }))
    }
    
    // const handleStatus = (id) => {
    //     alertes.forEach(item => {
    //         if(item.id === id) {
    //             item.status = item.status + 1
    //             console.log(item)
    //         }
    //     })
    //     return alertes
    // }

    return (
        <UsersContext.Provider value={{
            loading: loading,
            users: users,
            score: score,
            username: username,
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