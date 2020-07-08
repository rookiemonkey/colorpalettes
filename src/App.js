import React, { Component } from 'react';
import Palette from './components/Palette';
import seeds from './components/seeds';
import generatePalette from './helpers/generatePalette';

class App extends Component {
  render() {

    console.log(generatePalette(seeds[2]))

    return (
      <div className="Color-App">
        <Palette {...seeds[2]} />
      </div>
    );
  }
}

export default App;
