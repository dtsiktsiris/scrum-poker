import React, { useState } from 'react'
import './index.css'
import Card from '../../components/Card/';

function CardsHolder() {
    const userSelected = useState('');
    const othersSelected = useState('');
    
    const numbers = ['1', '2', '3', '5', '8', '13', '20', '40', '60', '100', '?', 'C'];
    const selNumbers = ['1', '2', '3', '5'];
    const listItems = numbers.map((number) => {
        return <Card key={number} number={number}></Card>
    });
    const selListItems = selNumbers.map((number) => {
        return <Card key={number} number={number}></Card>
    });

    return (
        <div>
            <div className="holderSel">
                <p>3 users have selected:</p>
                <div className="cards">
                    {selListItems}
                </div>
            </div>
            <div className="holder">
                <p>Choose you estimate:</p>
                <div className="cards">
                    {listItems}
                </div>
            </div>
        </div>
    )
}

export default CardsHolder;