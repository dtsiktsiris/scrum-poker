import React, { useEffect, useState } from 'react'
import './index.css'
import Card from '../../components/Card/';

const socket =  new WebSocket(`ws://localhost:3001`);

function CardsHolder() {
    const [selected, setSelected] = useState('');
    const [othersSelected, setOtherSelected] = useState([]);

    useEffect(() => {
        // Connection opened
        socket.addEventListener('open', function (event) {
            console.log('Connected to WS Server')
        });

        // Listen for messages
        socket.addEventListener('message', function (event) {
            // console.log('Message from server ', event.data);
            let list = JSON.parse(event.data)
            console.log(list);
            setOtherSelected(list);
        });

        socket.addEventListener('close', function (event) {
            console.log('WS Server closed')
        });
    }, [])

    const sendMessage = (choice: string) => {
        // console.log("opps called "+choice);
        setSelected(choice);
        socket.send(choice);
    }

    const numbers = ['1', '2', '3', '5', '8', '13', '20', '40', '60', '100', '?', 'C'];

    const selListItems = othersSelected.map((number,index) => {
        return <Card key={index} number={number} selected={number===selected}></Card>
    });

    const listItems = numbers.map((number) => {
        return <Card key={number} number={number} sendMessage={sendMessage}></Card>
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