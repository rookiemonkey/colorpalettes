import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import classNames from 'classnames';
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
        super(props)
    }

    componentDidMount() {
        ValidatorForm.addValidationRule("isNotEmpty", value => value !== '');
        ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
            this.props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
        );
    }

    render() {

        const { classes, isDrawerOpen, history, handleDrawerOpen, handleInputChange, handleSavePalette, paletteName } = this.props

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
                    <ValidatorForm onSubmit={handleSavePalette}>
                        <TextValidator
                            label='Palette Name'
                            name="paletteName"
                            value={paletteName}
                            onChange={handleInputChange}
                            validators={['required', 'isNotEmpty', 'isPaletteNameUnique']}
                            errorMessages={['Enter a palette name', 'Enter a palette name', 'Palette name already exisiting']}
                        />
                        <Button
                            type='submit'
                            variant="contained"
                            color="primary"
                        >Save Palette</Button>

                    </ValidatorForm>

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={history.goBack}
                    >Go Back</Button>
                </div>

            </AppBar>
        )
    }
}

export default withRouter(withStyles(formNavBarStyles, { withTheme: true })(PaletteFormNavBar))