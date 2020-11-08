import React from 'react'

import QuizButton from '../common/QuizButton'
import LeaderboardTable from './LeaderboardTable'

function Leaderboard() {
    return (
        <>
            <div className="leaderboard-top">
                <h1 class="vertical-align">Le quiz <span className="font-up font-b font-i">badass</span></h1>
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
                    <LeaderboardTable></LeaderboardTable>
                </div>
                <div className="leaderboard-unique">
                    <p>Notre top <span class=" font-up font-b font-i">badass</span></p>
                    <LeaderboardTable></LeaderboardTable>
                </div> */}


                <div className="leaderboard-unique">
                    <p>Ta position actuelle</p>
                    <table>
                        <tr>
                            <th>#1 &#129351;</th>
                            <th>pseudo</th>
                            <th class="font-up font-b font-i">BADASS</th>
                            <th>11/10</th>
                        </tr>
                        <tr>
                            <th>#2 &#129352;</th>
                            <th>pseudo</th>
                            <th class="font-up font-b font-i">BADASS</th>
                            <th>10/10</th>
                        </tr>
                        <tr>
                            <th>#3 &#129353;</th>
                            <th>pseudo</th>
                            <th class="font-up font-b font-i"></th>
                            <th>9/10</th>
                        </tr>
                        <tr>
                            <th>#4</th>
                            <th>pseudo</th>
                            <th class="font-up font-b font-i"></th>
                            <th>7/10</th>
                        </tr>
                    </table>
                </div>

                <div className="leaderboard-unique">
                    <p>Ta position actuelle</p>
                    <table>
                        <tr>
                            <th>#1 &#129351;</th>
                            <th>pseudo</th>
                            <th class="font-up font-b font-i">BADASS</th>
                            <th>11/10</th>
                        </tr>
                        <tr>
                            <th>#2 &#129352;</th>
                            <th>pseudo</th>
                            <th class="font-up font-b font-i">BADASS</th>
                            <th>10/10</th>
                        </tr>
                        <tr>
                            <th>#3 &#129353;</th>
                            <th>pseudo</th>
                            <th class="font-up font-b font-i"></th>
                            <th>9/10</th>
                        </tr>
                        <tr>
                            <th>#4</th>
                            <th>pseudo</th>
                            <th class="font-up font-b font-i"></th>
                            <th>7/10</th>
                        </tr>
                    </table>
                </div>

                <div className="leaderboard-unique">
                    <p>Ta position actuelle</p>
                    <table>
                        <tr>
                            <th>#1 &#129351;</th>
                            <th>pseudo</th>
                            <th class="font-up font-b font-i">BADASS</th>
                            <th>11/10</th>
                        </tr>
                        <tr>
                            <th>#2 &#129352;</th>
                            <th>pseudo</th>
                            <th class="font-up font-b font-i">BADASS</th>
                            <th>10/10</th>
                        </tr>
                        <tr>
                            <th>#3 &#129353;</th>
                            <th>pseudo</th>
                            <th class="font-up font-b font-i"></th>
                            <th>9/10</th>
                        </tr>
                        <tr>
                            <th>#4</th>
                            <th>pseudo</th>
                            <th class="font-up font-b font-i"></th>
                            <th>7/10</th>
                        </tr>
                    </table>
                </div>




            </div>
        </>
    )
}

export default Leaderboard