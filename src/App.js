import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Palette from './components/Palette';
import PaletteSingle from './components/PaletteSingle';
import PaletteForm from './components/PaletteForm';
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
          exact path='/palette/new'
          render={props => {
            return <PaletteForm />
          }}
        />

        <Route
          exact path='/palette/:id'
          render={routerProps => {
            const id = routerProps.match.params.id;
            if (!this.getPalette(id)) { return (<Redirect to="/" />) }
            const colors = this.getPalette(id)
            const palette = generatePalette(colors)
            return <Palette palette={palette} />
          }}
        />

        <Route
          exact path='/palette/:id/:colorid'
          render={routerProps => {
            const id = routerProps.match.params.id;
            if (!this.getPalette(id)) { return (<Redirect to="/" />) }
            const colorid = routerProps.match.params.colorid;
            const colors = this.getPalette(id)
            const palette = generatePalette(colors)
            return <PaletteSingle palette={palette} colorId={colorid} {...routerProps} />
          }}
        />

      </Switch>
    );
  }
}

export default App;
