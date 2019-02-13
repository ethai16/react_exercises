import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board';
import Game from './Game';
import Square from './Square'

class App extends Component{
  render(){
    return(
      <div>
        <Game />
      </div>
    )
  }
}

export default App;
