import CONFIG from './CONFIG';
const { drawerWidth } = CONFIG;

const paletteFormDrawerStyles = theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        height: "100vh"
    },
    drawerPaper: {
        width: drawerWidth,
        display: "flex",
        alignItems: "center"
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        padding: "0 8px",
        ...theme.mixins.toolbar,
        justifyContent: "space-between"
    },
    drawerColorPicker: {
        width: '100% !important',
        marginTop: '1.5rem'
    },
    drawerInputField: {
        width: '100%',
        height: '70px',
        marginTop: '1.5rem'
    },
    drawerAddButton: {
        width: "100%",
        padding: '0.5rem',
        marginTop: '1rem',
        fontSize: '1rem',
    },
    drawerButtonsContainer: {
        width: '100%'
    },
    drawerButton: {
        width: '50%'
    }
})

export default paletteFormDrawerStyles;