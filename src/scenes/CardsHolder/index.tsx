import React, { useState } from 'react'
import './index.css'
import Card from '../../components/Card/';

function CardsHolder(){
    const [selected, selectedClicked] = useState('');
    
    const numbers = ['1', '2', '3', '5','8','13','20','40','60','100', '?','C'];
    const listItems = numbers.map((number) => {
        return <Card key={number} number={number}></Card>  
    });
    
    return(
        <div className="holder">
            <p>Choose you estimate:</p>
            <div className="cards">
                {listItems}
            </div>
        </div>
    )
}

export default CardsHolder;