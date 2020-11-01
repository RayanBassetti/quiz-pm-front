import React from 'react'

import HomeRight from './HomeRight'
import HomeLeft from './HomeLeft'

function Home() {
    return (
        <div class="d-md-flex h-md-100 align-items-center">
            <div class="col-md-4 h-md-100 full-height">
                <HomeLeft />
            </div>
            <div class="col-md-8 bg-white h-md-100 full-height">
                <HomeRight />
            </div>
        </div>
    )
}

export default Home