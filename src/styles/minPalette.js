const miniPaletteStyles = {
    root: {
        backgroundColor: 'white',
        border: '1px solid black',
        borderRadius: '5px',
        padding: '0.5rem',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        "&:hover svg": {
            opacity: '1'
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
    },
    deleteIconContainer: {

    },
    deleteIcon: {
        width: '24px',
        height: '24px',
        position: 'absolute',
        top: '0px',
        right: '0px',
        padding: '5px',
        zIndex: '10',
        color: 'white',
        backgroundColor: '#eb3d30',
        opacity: '0',
        transition: 'opacity 300ms ease-in-out !important'
    }
}

export default miniPaletteStyles