import React from 'react'
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';;

const ColorBoxDraggableStyles = {
    root: {
        height: '20%',
        width: '20%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginButton: '-3.5px',
        '&:hover svg': {
            transform: 'scale(2)',
            color: 'whitesmoke'
        }
    },
    boxContent: {
        position: 'absolute',
        width: '100%',
        left: '0px',
        bottom: '0px',
        padding: '10px',
        color: 'black',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '12px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    icon: {
        fontSize: '12px',
        transition: 'transform 250ms ease-in-out'
    }
}

const ColorBoxDraggable = props => {

    const { classes, handleDelete, color } = props

    function handleDeleteCallBack() {
        handleDelete(color.name)
    }

    return (
        <div
            className={classes.root}
            style={{ backgroundColor: color.color }}
        >

            <div className={classes.boxContent}>
                <span>{color.name}</span>
                <span><DeleteIcon
                    className={classes.icon}
                    onClick={handleDeleteCallBack}
                /></span>
            </div>

        </div>
    )
}

export default withStyles(ColorBoxDraggableStyles)(ColorBoxDraggable);