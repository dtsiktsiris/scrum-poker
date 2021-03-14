import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import Button from "../../components/Button";

let socket: WebSocket;
let history;

function CreateRoom(props: any) {
    let createRoom = props.createRoom;
    history = useHistory();

    useEffect(() => {
        socket = new WebSocket(`ws://localhost:3001`);
        // Connection opened
        socket.addEventListener('open', function (event) {
            console.log('Connected to WS Server')
        });

        // Listen for messages
        socket.addEventListener('message', function (event) {
            // console.log('Message from server ', event.data);
            createRoom(event.data);
            history.push(`/${event.data}`);

        });

        socket.addEventListener('close', function (event) {
            console.log('WS Server closed')
        });
    }, [])

    const createClick = function () {
        socket.send('create-room');
    }
    return (
        <div>
            <p>create room</p>
            <Button buttonClick={createClick} name="Create">
            </Button>
        </div>
    )
}

export default CreateRoom;