import React from 'react'

import HomeRight from './HomeRight'
import HomeLeft from './HomeLeft'

function Home() {
    return (
        <div class="flex-row">
            <div class="flex-w-33 full-height">
                <HomeLeft />
            </div>
            <div class="flex-w-66 full-height">
                <HomeRight />
            </div>
        </div>
    )
}

export default Home