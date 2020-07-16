import mq from '../helpers/getMediaQuery'
import bg from '../images/Flat-Mountains.svg'

const homeStyles = {
    "@global": {
        ".fade-exit": {
            opacity: '1'
        },
        ".fade-exit-active": {
            opacity: '0',
            transition: 'opacity 500ms ease-out'
        }
    },
    root: {
        // background by: SVGBacgrounds.com
        backgroundImage: `url(${bg})`,
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        overflow: 'scroll',
    },
    nav: {
        display: 'flex',
        width: '100%',
        height: '50px',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        '& a': {
            textDecoration: 'none'
        }
    },
    container: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap',

        [mq.down('lg')]: {
            width: '65%',
        },
    },
    palettes: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '1.5rem',

        [mq.down('md')]: {
            gridTemplateColumns: 'repeat(2, 50%)',
        },

        [mq.down('xs')]: {
            gridTemplateColumns: 'repeat(1, 100%)',
        },
    }
}

export default homeStyles;