import React from 'react'

function LeaderboardTable({users, loading}) {

    return (
        <>
            <table>
                {loading &&
                    <p>Chargement...</p>
                }
                {!loading &&
                    users.map((item, i) => {
                        if(item.score >= 10) {
                            return <tr key={i}>
                                <th>#1 &#129351;</th>
                                <th>{item.username}</th>
                                <th class="font-up font-b font-i">BADASS</th>
                                <th>{item.score}</th>
                            </tr>
                        } else {
                            return <tr key={i}>
                                <th>{item.id} &#129351;</th>
                                <th>{item.username}</th>
                                <th></th>
                                <th>{item.score}</th>
                            </tr>
                        }
                    })
                }
            </table>
        </>
    )
}

export default LeaderboardTable