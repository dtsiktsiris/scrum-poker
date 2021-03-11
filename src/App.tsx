import React, { useState } from 'react';
import { Route, BrowserRouter as Router, useHistory  } from 'react-router-dom'
import './App.css';
import CardsHolder from './scenes/CardsHolder/';
import CreateRoom from './scenes/CreateRoom/'
import Header from './scenes/Header/';

function App() {
  const [role, setRole] = useState("user");

  let history = useHistory();

  const createRoom = (roomId: number) => {
    setRole("host")
    // redirect to room
    // history.push(`/${roomId}`)

  }
  return (
    <div className="app">
      <Header></Header>
      <Router>
        <Route exact path="/" >
          <CreateRoom createRoom={createRoom}></CreateRoom>
        </Route>
        <Route path="/:id" >
          <CardsHolder role={role} ></CardsHolder>
        </Route>
      </Router>
    </div>
  );
}

export default App;
