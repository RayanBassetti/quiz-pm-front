import React, { useContext } from 'react'

import QuizButton from '../common/QuizButton'
import { UsersContext } from '../contexts/UsersContext'
import LeaderboardTable from './LeaderboardTable'

function Leaderboard() {
    const {users, loading, leaderboard, setLeaderboard} = useContext(UsersContext)
    console.log(leaderboard)
    return (
        <>
            <div className="leaderboard-top">
                <h1 className="vertical-align">Le quiz <span className="font-up font-b font-i">badass</span></h1>
                <ul className="vertical-align">
                    <button onClick={() => setLeaderboard("badass")}>Quiz Badass</button>
                    <button onClick={() => setLeaderboard("adley")}>Adley Quiz</button>
                    <button onClick={() => setLeaderboard("popcorn")}>Popcorn Quiz</button>
                    <button onClick={() => setLeaderboard("pursuit")}>Pursuit Quiz</button>
                </ul>
                <QuizButton text="Jouer" route="/quiz"/>
            </div>
            <h2 className="leaderboard-title font-b">Le Panthéon</h2>
            <div className="leaderboard-list">
                {/* <div className="leaderboard-unique">
                    <p>Ta position actuelle</p>
                    <LeaderboardTable users={users} loading={loading}></LeaderboardTable>
                </div> */}
                <div className="leaderboard-unique">
                    <p>Notre top <span className=" font-up font-b font-i">badass</span></p>
                    <LeaderboardTable users={users} loading={loading}></LeaderboardTable>
                </div>
            </div>
        </>
    )
}

export default Leaderboard