import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import shortid from 'shortid';
import homeStyles from '../styles/home';
import MiniPalette from './MiniPalette';

class Home extends Component {

    handleClick = id => {
        this.props.history.push(`/palette/${id}`)
    }

    helpDeletePalette = id => {
        this.props.deletePalette(id)
    }

    render() {

        const { palettes, classes } = this.props
        const minipalettes = palettes.map((p, i) => {
            return (
                <CSSTransition
                    key={shortid.generate()}
                    classNames='fade'
                    timeout={1000}>

                    <MiniPalette
                        {...palettes[i]}
                        key={shortid.generate()}
                        handleClick={this.handleClick}
                        deletePalette={this.helpDeletePalette}
                    />

                </CSSTransition>
            )
        })

        return (
            <article className={classes.root} >
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
                        <Link to='/palette/new' style={{ color: 'white' }}>Add Palette</Link>
                    </nav>
                    <TransitionGroup className={classes.palettes}>
                        {minipalettes}
                    </TransitionGroup>
                </div>
            </article>
        )
    }
}

export default withStyles(homeStyles)(Home);