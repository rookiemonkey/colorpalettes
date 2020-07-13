import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import shortid from 'shortid';
import homeStyles from '../styles/home';
import MiniPalette from './MiniPalette';

class Home extends Component {

    handleClick = id => {
        this.props.history.push(`/palette/${id}`)
    }

    render() {

        const { palettes, classes } = this.props
        const minipalettes = palettes.map((p, i) => {
            return (
                <MiniPalette
                    {...palettes[i]}
                    key={shortid.generate()}
                    handleClick={this.handleClick}
                />
            )
        })

        return (
            <article className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
                        <Link to='/palette/new' style={{ color: 'white' }}>Add Palette</Link>
                    </nav>
                    <section className={classes.palettes}>
                        {minipalettes}
                    </section>
                </div>
            </article>
        )
    }
}

export default withStyles(homeStyles)(Home);