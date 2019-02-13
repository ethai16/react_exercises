import React, { Component } from 'react';
import Title from './Title'
import Article from './Article'
import Comments from './Comments'

class App extends Component {


  render() {
    return (
      <div>
        <Title />
        <Article />
        <Comments />
      </div>
    );
  }
}

export default App;
