import React, { PureComponent } from 'react';
import shortid from 'shortid';
import { withStyles } from '@material-ui/styles';
import miniPaletteStyles from '../styles/minPalette';
import DeleteIcon from '@material-ui/icons/Delete'

class MiniPalette extends PureComponent {
    render() {

        const { classes, paletteName, id, emoji, colors, handleClick, deletePalette } = this.props
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
            >

                <DeleteIcon
                    className={classes.deleteIcon}
                    onClick={() => { deletePalette(id) }}
                />

                <div
                    className={classes.colors}
                    onClick={() => { handleClick(id) }}
                >
                    {miniColorBoxes}
                </div>

                <h5 className={classes.title}>
                    {paletteName}
                    <span className={classes.emoji}>{emoji}</span>
                </h5>

            </section>
        )
    }
}

export default withStyles(miniPaletteStyles)(MiniPalette);