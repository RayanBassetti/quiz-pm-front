import React from 'react'

import batman from '../imgs/batman.jpg'
import curie from '../imgs/curie.png'
import diane from '../imgs/diane.jpg'
import kratos from '../imgs/kratos.jpg'
import matrix from '../imgs/matrix.jpg'
import veil from '../imgs/veil.jpg'
import mims from '../imgs/mims.png'

const handleBackgrounds = () => {
    let rand = Math.floor(Math.random() * 6)
    switch(rand) {
        case 0 : 
            return batman
        case 1 :
            return curie
        case 2 : 
            return diane
        case 3 : 
            return kratos
        case 4 : 
            return matrix
        case 5 :
            return veil
        default :
            return mims
    }
}

let bg = {
    backgroundImage: `url(${handleBackgrounds()})`,
    backgroundPosition: 'center'
}

function Background() {
    return (
        <div className="bg-accueil" style={bg}></div>
    )
}
export default Background