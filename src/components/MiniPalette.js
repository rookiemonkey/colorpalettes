import React from 'react';
import shortid from 'shortid';
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
        height: '150px',
        width: '100%',
        backgroundColor: '#dae1e4',
        borderRadius: '5px',
        overflow: 'hidden'
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
    },
    miniColor: {
        height: '25%',
        width: '20%',
        display: 'inline-block',
        margin: '0 auto',
        position: 'relative',
        marginBottom: '-3.5px'
    }
}

const MiniPalette = props => {
    const { classes, paletteName, id, emoji, colors, handleClick } = props
    const miniColorBoxes = colors.map(c => {
        return (
            <div
                key={shortid.generate()}
                style={{ backgroundColor: c.color }}
                className={classes.miniColor}
            />
        )
    })

    return (
        <section
            className={classes.root}
            onClick={() => { handleClick(id) }}
        >
            <div className={classes.colors}>
                {miniColorBoxes}
            </div>
            <h5 className={classes.title}>
                {paletteName}
                <span className={classes.emoji}>{emoji}</span>
            </h5>
        </section >
    )
}

export default withStyles(style)(MiniPalette);