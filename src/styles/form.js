import CONFIG from './CONFIG';
const { drawerWidth } = CONFIG;

const formStyles = theme => ({
    root: {
        display: "flex"
    },
    content: {
        flexGrow: 1,
        height: "calc(100vh - 64px)",
        marginTop: '64px',
        padding: 0,
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: -drawerWidth
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    },
    container: {
        width: "90%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    buttons: {
        width: "100%"
    }
});

export default formStyles;