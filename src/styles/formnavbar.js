import CONFIG from './CONFIG';
const { drawerWidth } = CONFIG;

const formNavBarStyles = theme => ({
    appBar: {
        display: 'flex',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '64px'
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    appBarButtons: {
        marginRight: '1rem'
    },
    appBarButton: {
        margin: '0 0.5rem'
    }
})

export default formNavBarStyles