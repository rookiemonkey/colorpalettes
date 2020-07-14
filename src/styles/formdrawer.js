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
        justifyContent: "flex-end"
    },
})

export default paletteFormDrawerStyles;