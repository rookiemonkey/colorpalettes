import React from 'react';
import shortid from 'shortid';
import { withStyles } from '@material-ui/styles';
import miniPaletteStyles from '../styles/minPalette';

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

export default withStyles(miniPaletteStyles)(MiniPalette);