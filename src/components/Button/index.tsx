import React from 'react'
import './index.css'

const Button = (props: any) => {

    const buttonClick = function () {
        props.buttonClick();
    }

    return(
        <button className="button" onClick={buttonClick}>{props.name}</button>
    )
}

export default Button;