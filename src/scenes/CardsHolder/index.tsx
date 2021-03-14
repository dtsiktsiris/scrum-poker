import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import './index.css'
import Card from '../../components/Card/';
import Button from "../../components/Button";


let socket: WebSocket;
let history;

function CardsHolder(props: any) {
    const [selected, setSelected] = useState('');
    const [allChoices, setAllChoices] = useState([]);

    history = useHistory();

    useEffect(() => {


        socket = new WebSocket(`ws://localhost:3001${window.location.pathname}`);
        // Connection opened
        socket.addEventListener('open', function (event) {
            console.log('Connected to WS Server')
        });

        // Listen for messages
        socket.addEventListener('message', function (event) {
            // console.log('Message from server ', event.data);
            if (event.data === 'room-not-found') {
                history.push('/');
            } else {
                let list = JSON.parse(event.data)
                console.log(list);
                setAllChoices(list);
            }
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

    const numbers = ['1', '2', '3', '5', '8', '13', '20', '40', '100', '?', 'C'];

    const selListItems = allChoices.map((number, index) => {
        return <Card key={index} number={number} selected={number === selected}></Card>
    });

    const listItems = numbers.map((number) => {
        return <Card key={number} number={number} sendMessage={sendMessage}></Card>
    });

    const resetClick = function () {
        socket.send('reset-votes');
    }
    const revealClick = function () {
        socket.send('reveal-votes');
    }
    return (
        <div>
            <div className="holderSel">
                <p>{allChoices.filter(c => c === 'o').length} users have not vote yet</p>
                <div className="cards">
                    {selListItems}
                </div>
            </div>
            <div>
                {(props.role === 'host') ?
                    [
                        <Button buttonClick={resetClick} name="Reset"/>,
                        <Button buttonClick={revealClick} name="Reveal"/>
                    ] : null}
            </div>
            <div className="holder">
                <p>Choose your estimate:</p>
                <div className="cards">
                    {listItems}
                </div>
            </div>
        </div>
    )
}

export default CardsHolder;