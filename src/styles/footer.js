const footerStyles = {
    FooterContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '4vh',

        '& span': {
            marginRight: '1rem',
            backgroundColor: 'transparent',
            transition: 'letter-spacing 500ms ease-in-out',

            '&:hover': {
                letterSpacing: '0.25rem'
            }
        }
    }
}

export default footerStyles