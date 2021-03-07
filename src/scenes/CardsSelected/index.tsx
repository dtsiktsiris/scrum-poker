import React, { useState } from 'react'
import './index.css'
import Card from '../../components/Card/';

function CardsSelected(){
    const [selected, selectedClicked] = useState('');
    
    const numbers = ['1', '2', '3', '5','8'];
    const listItems = numbers.map((number) => {
        return <Card key={number} number={number}></Card>  
    });
    
    return(
        <div className="holder">
            <p>3 users have selected:</p>
            <div className="cards">
                {listItems}
            </div>
        </div>
    )
}

export default CardsSelected;