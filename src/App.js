import React, { Component } from 'react';
import Palette from './components/Palette';
import seeds from './components/seeds';
import generatePalette from './helpers/generatePalette';

class App extends Component {
  render() {
    return (
      <div className="Color-App">
        <Palette palette={generatePalette(seeds[2])} />
      </div>
    );
  }
}

export default App;
