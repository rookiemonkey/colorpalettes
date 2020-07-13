import React, { Component } from 'react';
import { ChromePicker } from 'react-color'
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SaveIcon from '@material-ui/icons/Save';
import formStyles from '../styles/form';
import { withStyles } from '@material-ui/styles';

class PaletteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            currentColor: 'white',
            colorBoxes: []
        }
    }

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    handleColorChange = newColor => {
        this.setState({ ...this.state, currentColor: newColor.hex })
    }

    handleAddColor = newColor => {
        const { currentColor, colorBoxes } = this.state
        const newSet = [...colorBoxes, currentColor]
        this.setState({ ...this.state, colorBoxes: newSet, currentColor: 'white' })
    }

    render() {
        const { classes } = this.props
        const { open, currentColor } = this.state
        console.log('after rendering', this.state)

        return (
            <div className={classes.root} >
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            Persistent drawer
                    </Typography>
                    </Toolbar>
                </AppBar>

                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}>

                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose} style={{ float: 'right' }}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>

                    <Divider />

                    <Typography variant="h4" noWrap>
                        Design your palette
                    </Typography>

                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                        >Clear</Button>

                        <Button
                            variant="contained"
                            color="secondary"
                        >Random</Button>
                    </div>

                    <ChromePicker
                        color={currentColor}
                        onChange={this.handleColorChange}
                    />

                    <Button
                        style={{ backgroundColor: currentColor }}
                        onClick={this.handleAddColor}
                        variant="contained"
                        size="large"
                        className={classes.button}
                        id='save-button'
                        startIcon={<SaveIcon />}
                    >Save</Button>

                </Drawer>

                <main
                    className={clsx(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader} />

                    {/* dragable boxees goes here */}
                </main>
            </div>
        );
    }
}

export default withStyles(formStyles, { withTheme: true })(PaletteForm)