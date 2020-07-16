import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './components/Home';
import Page from './components/Page';
import Palette from './components/Palette';
import PaletteSingle from './components/PaletteSingle';
import PaletteForm from './components/PaletteForm';
import Error404 from './components/404';
import seeds from './components/seeds';
import generatePalette from './helpers/generatePalette';
import './styles/page.css';

class App extends Component {
  constructor(props) {
    super(props)
    const localPalettes = JSON.parse(window.localStorage.getItem('palettes'))
    this.state = {
      palettes: localPalettes || seeds
    }
  }

  getPalette = id => {
    return this.state.palettes.find(p => { return p.id === id })
  }

  savePalette = newPalette => {
    this.setState({ palettes: [...this.state.palettes, newPalette] }, () => {
      window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes))
    })
  }

  deletePalette = id => {
    this.setState({ palettes: this.state.palettes.filter(p => { return p.id !== id }) }, () => {
      window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes))
    })
  }

  render() {
    // this single route is intended for the page transition
    // the idea is that this route will always be render hence
    // connection all other routes for the page transition
    return (
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames='fade' timeout={500}>
            <Switch location={location}>

              <Route
                exact
                path='/'
                render={(routerProps) => {
                  return <Page>
                    <Home
                      palettes={this.state.palettes}
                      deletePalette={this.deletePalette}
                      {...routerProps}
                    />
                  </Page>
                }}
              />

              <Route
                exact path='/palette/new'
                render={routerProps => {
                  return <Page>
                    <PaletteForm
                      palettes={this.state.palettes}
                      savePalette={this.savePalette}
                      {...routerProps}
                    />
                  </Page>
                }}
              />

              <Route
                exact path='/palette/:id'
                render={routerProps => {
                  const id = routerProps.match.params.id;
                  if (!this.getPalette(id)) { return (<Redirect to="/" />) }
                  const colors = this.getPalette(id)
                  const palette = generatePalette(colors)
                  return <Page>
                    <Palette
                      palette={palette}
                    />
                  </Page>
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
                  return <Page>
                    <PaletteSingle
                      palette={palette}
                      colorId={colorid}
                      {...routerProps}
                    />
                  </Page>
                }}
              />

              <Route
                exact path='*'
                component={Error404}
              />

            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    );
  }
}

export default App;
