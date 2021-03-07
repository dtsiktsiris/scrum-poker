import React from 'react'
import './Card.css'

function Card(props: any){
    return(
        <div className="card">{props.number}</div>
    )
}

export default Card;