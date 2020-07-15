import mq from '../helpers/getMediaQuery'

const colorBoxStyles = {

    // animations
    '@keyframes fadeout': {
        from: { opacity: '1' },
        to: { opacity: '0' }
    },
    '@keyframes copied-msg-entrance': {
        '0%': {
            opacity: '0',
            transform: 'scale(0.1)',
        },
        '50%': {
            opacity: '1',
            transform: 'scale(1),'
        },
        '100%': {
            opacity: '0',
            transform: 'scale(1)',
        },
    },

    // parent container
    ColorBoxContainer: {
        width: '20%',
        height: '25%',
        margin: '0 auto',
        marginBottom: '-4.5px',
        display: ' inline-block',
        position: 'relative',
        cursor: 'pointer',

        '&:hover button': {
            opacity: '1',
            transition: '500ms',
        },

        [mq.down('lg')]: {
            width: '25%'
        },

        [mq.down('md')]: {
            width: '33.33%'
        },

        [mq.down('xs')]: {
            width: '100%',
            height: '5%'
        },
    },

    // overlay - background that grows when copied
    ColorBoxOverlay: {
        transform: 'scale(0.1)',
        height: '100%',
        width: '100%',
        opacity: '0',
        zIndex: '5',
        transition: 'transform 500ms ease-in-out'
    },
    ColorBoxCopied: {
        position: 'absolute',
        transform: 'scale(50)',
        opacity: '1',
        Index: '10',
        animationName: '$fadeout',
        animationDelay: '1000ms',
        animationDuration: '2000ms',
        // duration should the same with handle click
        // color box setTimeout
    },

    // overlay - message that shows when copied
    ColorBoxOverlayMessage: {
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '4rem',
        transform: 'scale(0.1)',
        opacity: '0',
        color: 'white',
        transition: 'transform opacity 500ms ease -in -out',
        '& h1': {
            fontSize: '4rem',
            fontWeight: '400',
            textShadow: '1px 2px black',
        },
        '& p': {
            fontSize: '2rem',
            textShadow: '1px 2px black',
            textTransform: 'uppercase',
        }
    },
    Show: {
        zIndex: '25',
        animationName: '$copied-msg-entrance',
        animationDelay: '150ms',
        animationDuration: '2000ms',
    },

    // contains hides/shows the copy button
    ColorBoxCopy: {
        width: '100px',
        height: '30px',
        position: 'absolute',
        display: 'inline-block',
        top: '50%',
        left: '50%',
        marginLeft: '-50px',
        marginTop: '-15px',
        textAlign: 'center',
        outline: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        fontSize: '1rem',
        lineHeight: '30px',
        color: 'white',
        textTransform: 'uppercase',
        border: 'none',
        opacity: '0',
        cursor: 'copy'
    },

    // contains the color name and the 'more' btn
    ColorBoxContentContainer: {
        position: 'absolute',
        width: '100%',
        left: '0px',
        bottom: '0px',
        padding: '10px',
        color: 'black',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '12px'
    },

    // 'more' btn 
    ColorBoxMore: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        position: 'absolute',
        border: 'none',
        right: '0px',
        bottom: '0px',
        color: 'white',
        width: '60px',
        height: '30px',
        textAlign: 'center',
        lineHeight: '30px',
        textTransform: 'uppercase',
        cursor: 'zoom-in'
    }
}

export default colorBoxStyles