import React from 'react'

function LeaderboardTable({users, loading}) {

    return (
        <>
            <table>
                <tbody>
                {loading &&
                    <td>Chargement...</td>
                }
                {!loading &&
                    users.map((item, i) => {
                        return <tr>
                            <th>{i + 1} &#129351;</th>
                            <th>{item.username}</th>
                            <th>{item.score >= 10 ?  <th className="font-up font-b font-i">BADASS</th>:<th></th>}</th>
                            <th>{item.score}</th>
                        </tr>
                    })
                }
                </tbody>
            </table>
        </>
    )
}

export default LeaderboardTable