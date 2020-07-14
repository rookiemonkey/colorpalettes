import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Palette from './components/Palette';
import PaletteSingle from './components/PaletteSingle';
import PaletteForm from './components/PaletteForm';
import seeds from './components/seeds';
import generatePalette from './helpers/generatePalette';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      palettes: seeds
    }
  }

  getPalette = id => {
    return this.state.palettes.find(p => { return p.id === id })
  }

  savePalette = newPalette => {
    this.setState({ palettes: [...seeds, newPalette] })
  }

  render() {
    return (
      <Switch>

        <Route
          exact
          path='/'
          render={(routerProps) => {
            return < Home palettes={this.state.palettes} {...routerProps} />
          }}
        />

        <Route
          exact path='/palette/new'
          render={routerProps => {
            return <PaletteForm savePalette={this.savePalette} {...routerProps} palettes={this.state.palettes} />
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
