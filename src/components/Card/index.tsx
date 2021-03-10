import React from 'react'
import './index.css'

function Card(props: any) {

    const cardClick = function () {
        props.sendMessage(props.number);
    }

    return (
        <div className={`card ${(props.selected)?"selected":"notSelected"}`} onClick={cardClick}>
            {props.number}
        </div>
    )
}

export default Card;