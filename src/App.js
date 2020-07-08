import React, { Component } from 'react';
import Palette from './components/Palette';
import seeds from './components/seeds';

class App extends Component {
  render() {
    return (
      <div className="Color-App">
        <Palette {...seeds[0]} />
      </div>
    );
  }
}

export default App;
