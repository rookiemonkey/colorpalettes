import React from 'react'
import { withStyles } from '@material-ui/styles';

const ColorBoxDraggableStyles = {
    root: {
        height: '20%',
        width: '20%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginButton: '-3.5px'
    }
}

const ColorBoxDraggable = props => {

    const { classes } = props

    return (
        <div
            className={classes.root}
            style={{ backgroundColor: props.color }}
        >{props.color}
        </div>
    )
}

export default withStyles(ColorBoxDraggableStyles)(ColorBoxDraggable);