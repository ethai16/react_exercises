import React, { Component } from 'react';
import './App.css';
import MemoryCard from './MemoryCard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Memory Game</h1>
          <div className = "subtitle">Match Cards to Win!</div>
        </header>
        <div>
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
        <div>
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
        <div>
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
        <div>
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
      </div>
    );
  }
}

export default App;