import React from 'react';
import logo from './logo.svg';
import './App.css';
import ComputerClock from './Clock/ComputerClock.js'
import WorldClock from './Clock/WoldClock.js'



function App(props) {
  return (<div>
    <h1>Exemplo de acesso a API externa</h1>
    <ComputerClock />
    <WorldClock/>
  </div>);
}

export default App;
