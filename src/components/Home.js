import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import MiniPalette from './MiniPalette';
import shortid from 'shortid';

const style = {
    root: {
        backgroundColor: 'blue',
        height: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    nav: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        color: 'white'
    },
    container: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    palettes: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '5%'
    }
}

class Home extends Component {
    render() {

        const { palettes, classes } = this.props
        const minipalettes = palettes.map((p, i) => {
            return (
                <MiniPalette {...palettes[i]} />
            )
        })

        return (
            <article className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
                    </nav>
                    <section className={classes.palettes}>
                        {minipalettes}
                    </section>
                </div>
            </article>
        )
    }
}

export default withStyles(style)(Home);