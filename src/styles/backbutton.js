const backButtonStyles = {
    backButtonContainer: {
        width: '20%',
        height: '50%',
        margin: '0 auto',
        marginBottom: '-4.5px',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer'
    },
    backButton: {
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
        backgroundColor: 'black',
        fontSize: '1rem',
        lineHeight: '30px',
        color: 'white',
        textTransform: 'uppercase',
        border: 'none',
        cursor: 'copy'
    },
    colorBoxOverlay: {
        height: '100%',
        width: '100%'
    },
    colorBoxOverlayMessage: {
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: '0'
    },
    colorBoxContentContainer: {
        position: 'absolute',
        width: '100%',
        left: '0px',
        bottom: '0px',
        padding: '10px',
        color: 'black',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '12px',
    },
}

export default backButtonStyles