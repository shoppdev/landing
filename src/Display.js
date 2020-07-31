import React from 'react'
import './Display.css'

const Display = ({ textDisplay }) =>{
    return(
        <div>
            <h1>Hello.</h1>
            <h2>My name is Travis I want to be your next <span>{textDisplay}</span>.</h2>
            
        </div>
    )
}

export default Display