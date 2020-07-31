import React from 'react'
import './TextBox.css'

const TextBox = ({ changeText }) =>{
    return(
        <input
            type="search"
            placeholder="Type Job Here"
            onChange={changeText}
        />
    )
}

export default TextBox