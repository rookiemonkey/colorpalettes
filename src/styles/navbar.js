import mq from '../helpers/getMediaQuery'

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
        fontSize: '15px',
        backgroundColor: '#eceff1',
        height: '100%',
        display: 'flex',
        alignItems: 'center',

        [mq.down('xs')]: {
            display: 'none'
        },

        '& a': {
            textDecoration: 'none',
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
            width: '350px',
            margin: '0px 10px',
            display: 'inline-block',

            [mq.down('md')]: {
                width: '150px'
            },

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