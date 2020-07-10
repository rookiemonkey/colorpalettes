import React from 'react';
import { withStyles } from '@material-ui/styles';

const style = {
    root: {
        backgroundColor: 'white',
        border: '1px solid black',
        borderRadius: '5px',
        padding: '0.5rem',
        position: 'relative',
        overflow: 'hidden',
        "&:hover": {
            cursor: 'pointer'
        }
    },
    colors: {
        backgroundColor: 'gray'
    },
    title: {
        display: 'flex',
        justifyContent: 'space-Between',
        alignItems: 'center',
        margin: '0',
        color: 'black',
        paddingTop: '0.5rem',
        fontSize: '1rem',
        position: 'relative'
    },
    emoji: {
        marginLeft: '0.5rem',
        fontSize: '1.5rem'
    }
}

const MiniPalette = props => {
    const { classes, paletteName, id, emoji, colors } = props
    console.log(props)

    return (
        <section className={classes.root}>
            <div className={classes.colors}></div>
            <h5 className={classes.title}>
                {paletteName}
                <span className={classes.emoji}>{emoji}</span>
            </h5>
        </section>
    )
}

export default withStyles(style)(MiniPalette);