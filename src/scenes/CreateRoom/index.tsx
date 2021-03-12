import React, { useEffect, useState } from 'react'
import { useHistory  } from 'react-router-dom'

let socket: WebSocket;

function CreateRoom(props: any) {

    let history = useHistory();
    useEffect(() => {
        socket = new WebSocket(`ws://localhost:3001`);
        // Connection opened
        socket.addEventListener('open', function (event) {
            console.log('Connected to WS Server')
        });

        // Listen for messages
        socket.addEventListener('message', function (event) {
            // console.log('Message from server ', event.data);
            props.createRoom(event.data);
            history.push(`/${event.data}`);
            
        });

        socket.addEventListener('close', function (event) {
            console.log('WS Server closed')
        });
    }, [])

    const createClick = function () {
        socket.send('create-room');
        // props.createRoom();
    }
    return (
        <div>
            <p>create room</p>
            <button onClick={createClick}>Create</button>
        </div>
    )
}

export default CreateRoom;