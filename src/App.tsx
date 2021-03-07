import React, { useState } from 'react';
import './App.css';
import CardsHolder from './scenes/CardsHolder/';
import CardsSelected from './scenes/CardsSelected/';
import Header from './scenes/Header/';

function App() {

  return (
    <div className="app">
      <Header></Header>
      <CardsSelected></CardsSelected>
      <CardsHolder></CardsHolder>
    </div>
  );
}

export default App;
