import React from 'react'
import './CardsHolder.css'
import Card from '../components/Card';

function CardsHolder(){
    const numbers = ['1', '2', '3', '5','8','13','20','40','60','100', '?','C'];
    const listItems = numbers.map((number) => <Card number={number}></Card>  );

    return(
        <div className="holder">
            {listItems}
        </div>
    )
}

export default CardsHolder;