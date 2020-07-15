import mq from '../helpers/getMediaQuery'

const colorBoxDraggableStyles = {
    root: {
        height: '25%',
        width: '20%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-4.5px',
        '&:hover svg': {
            transform: 'scale(2)',
            color: 'white'
        },

        [mq.down('lg')]: {
            width: '25%',
            height: '20%'
        },

        [mq.down('md')]: {
            width: '50%',
            height: '10%'
        },

        [mq.down('sm')]: {
            width: '100%',
            height: '5%'
        },
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
        color: 'rgba(0, 0, 0, 0.25)',
        transition: 'transform 250ms ease-in-out'
    }
}

export default colorBoxDraggableStyles