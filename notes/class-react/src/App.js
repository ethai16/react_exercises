import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './Products'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

class App extends Component {
  render(){
    return (
      <div>
        <h1>Hello World</h1> 
        <h2>This is the beginning of React</h2>
        <Products productName = "Mac"/>
      </div>
    )
  }
}

export default App;
