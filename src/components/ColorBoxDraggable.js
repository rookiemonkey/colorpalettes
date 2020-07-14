import React from 'react'
import { SortableElement } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import colorBoxDraggableStyles from '../styles/colorboxdraggable';

const ColorBoxDraggable = SortableElement(props => {

    const { classes, handleDelete, color } = props

    return (
        <div
            className={classes.root}
            style={{ backgroundColor: color.color }}
        >

            <div className={classes.boxContent}>
                <span>{color.name}</span>
                <span><DeleteIcon
                    className={classes.icon}
                    onClick={handleDelete}
                /></span>
            </div>

        </div>
    )
})

export default withStyles(colorBoxDraggableStyles)(ColorBoxDraggable);