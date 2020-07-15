import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import PaletteFormDialog from './PaletteFormDialog';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu'
import formNavBarStyles from '../styles/formnavbar';

class PaletteFormNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    handleOpenDialog = () => {
        this.setState({ open: true })
    }

    handleCloseDialog = () => {
        this.setState({ open: false })
    }

    helpHandlePaletteNameChange = name => {
        this.props.handlePaletteNameChange(name)
    }

    helpHandleSavePalette = () => {
        this.props.handleSavePalette()
    }

    render() {

        const { classes, palettes, isDrawerOpen,
            history, handleDrawerOpen,
            paletteName } = this.props

        return (
            <AppBar
                position="fixed"
                color="default"
                className={classNames(classes.appBar, {
                    [classes.appBarShift]: isDrawerOpen,
                })}
            >
                <Toolbar disableGutters={!isDrawerOpen}>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={classNames(classes.menuButton, isDrawerOpen && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" noWrap>
                        Create a palette
                    </Typography>
                </Toolbar>

                <div className={classes.appBarButtons}>

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={history.goBack}
                    >Go Back</Button>

                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={this.handleOpenDialog}
                    >SAVE</Button>

                </div>

                {
                    this.state.open
                        ? <PaletteFormDialog
                            palettes={palettes}
                            paletteName={paletteName}
                            open={this.state.open}
                            handleCloseDialog={this.handleCloseDialog}
                            helpHandleSavePalette={this.helpHandleSavePalette}
                            helpHandlePaletteNameChange={this.helpHandlePaletteNameChange}
                        />
                        : null
                }

            </AppBar>
        )
    }
}

export default withRouter(withStyles(formNavBarStyles, { withTheme: true })(PaletteFormNavBar))