import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import CardsHolder from './scenes/CardsHolder/';
import CreateRoom from './scenes/CreateRoom/'
import Header from './scenes/Header/';

function App() {

  return (
    <div className="app">
      <Header></Header>
      <Router>
        <Route exact path="/" component={CreateRoom} />
        <Route path="/:id" component={CardsHolder} />
      </Router>
    </div>
  );
}

export default App;
