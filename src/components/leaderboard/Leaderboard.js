import React, { useContext } from 'react'
import { useHistory } from 'react-router'

import QuizButton from '../common/QuizButton'
import { UsersContext } from '../contexts/UsersContext'
import LeaderboardTable from './LeaderboardTable'

function Leaderboard() {
    const history = useHistory()
    const {users, loading} = useContext(UsersContext)
    return (
        <>
            <div className="leaderboard-top">
                <h1 class="vertical-align" onClick={() => history.goBack()}>Le quiz <span className="font-up font-b font-i">badass</span></h1>
                <ul class="vertical-align">
                    <li><a href="#e">Quiz 1</a></li>
                    <li><a href="#e">Quiz 2</a></li>
                    <li><a href="#e">Quiz 3</a></li>
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
                    <p>Notre top <span class=" font-up font-b font-i">badass</span></p>
                    <LeaderboardTable users={users} loading={loading}></LeaderboardTable>
                </div>
            </div>
        </>
    )
}

export default Leaderboard