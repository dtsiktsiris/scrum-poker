import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardsHolder from './scenes/CardsHolder/';
import Header from './scenes/Header/';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <CardsHolder></CardsHolder>
    </div>
  );
}

export default App;
