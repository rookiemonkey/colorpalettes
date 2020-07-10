import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Palette from './components/Palette';
import seeds from './components/seeds';
import generatePalette from './helpers/generatePalette';

class App extends Component {

  getPalette = id => {
    return seeds.find(p => { return p.id === id })
  }

  render() {
    return (
      <Switch>

        <Route
          exact
          path='/'
          render={(routerProps) => {
            return < Home palettes={seeds} {...routerProps} />
          }}
        />

        <Route
          exact path='/palette/:id'
          render={props => {
            const id = props.match.params.id;
            if (!this.getPalette(id)) { return (<Redirect to="/" />) }
            const colors = this.getPalette(id)
            const palette = generatePalette(colors)
            return <Palette palette={palette} />
          }}
        />

        <Route
          exact path='/palette/:id/:colorname'
          render={props => {
            const id = props.match.params.id;
            const colorname = props.match.params.colorname;
            return <h1>{colorname}</h1>
          }}
        />

      </Switch>
    );
  }
}

export default App;
