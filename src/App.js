import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Palette from './components/Palette';
import seeds from './components/seeds';
import generatePalette from './helpers/generatePalette';

class App extends Component {
  render() {
    return (
      <Switch>

        <Route
          exact path='/'
          render={() => (<h1>This is Home</h1>)}
        />

        <Route
          exact path='/palette/:id'
          render={() => (<Palette palette={generatePalette(seeds[2])} />)}
        />

      </Switch>
    );
  }
}

export default App;
