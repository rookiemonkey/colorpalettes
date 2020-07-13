const navBarStyles = {
    NavbarContainer: {
        padding: '0px 1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '6vh'
    },

    NavbarLogoContainer: {
        marginRight: '15px',
        padding: '0 13px',
        fontSize: '22px',
        backgroundColor: '#eceff1',
        height: '100%',
        display: 'flex',
        alignItems: 'center',

        '& a': {
            textDecoration: 'none'
        }
    },

    SelectContainer: {
        marginLeft: 'auto'
    },

    NavbarSliderContainer: {
        '& .Navbar-level': {
            marginLeft: '10px'
        },

        '& .Navbar-slider': {
            width: '150px',
            margin: '0px 10px',
            display: 'inline-block',

            '& .rc-slider-track': {
                backgroundColor: 'transparent'
            },

            '& .rc-slider-rail': {
                height: '8px'
            },

            '& .rc-slider-handle, .rc-slider-handle:hover, .rc-slider-handle:active, .rc-slider-handle:focus': {
                backgroundColor: 'green',
                outline: 'none',
                border: '2px solid green',
                boxShadow: 'none',
                width: '13px',
                height: '13px',
                marginLeft: '-7px',
                marginTop: '-3px'
            }
        }

    }

}

export default navBarStyles