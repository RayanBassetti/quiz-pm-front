import React from 'react'

import HomeRight from './HomeRight'
import HomeLeft from './HomeLeft'

function Home() {
    return (
        <div className="flex-row">
            <div className="flex-w-33 full-height">
                <HomeLeft />
            </div>
            <div className="flex-w-66 full-height">
                <HomeRight />
            </div>
        </div>
    )
}

export default Home