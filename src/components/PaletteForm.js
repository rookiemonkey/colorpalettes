import React, { Component } from 'react';
import { ChromePicker } from 'react-color'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import classNames from 'classnames';
import ColorBoxDraggableList from './ColorBoxDraggableList';
import { withStyles } from '@material-ui/core/styles';
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
import formStyles from '../styles/form';
import arrayMove from '../helpers/arrayMove';

class PaletteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            paletteName: '',
            colorName: '',
            currentColor: '',
            colorBoxes: this.props.palettes[0].colors // starter
        }
    }

    componentDidMount() {
        ValidatorForm.addValidationRule("isColorNameUnique", value =>
            this.state.colorBoxes.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
        );
        ValidatorForm.addValidationRule("isColorUnique", value =>
            this.state.colorBoxes.every(({ color }) => color !== this.state.currentColor)
        );
        ValidatorForm.addValidationRule("isNotEmpty", value => value !== '');
        ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
            this.props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
        );
    }

    handleSavePalette = () => {
        const newColor = {
            paletteName: this.state.paletteName,
            id: this.state.paletteName.toLowerCase().replaceAll(' ', '-'),
            emoji: '😚',
            colors: this.state.colorBoxes
        }
        this.props.savePalette(newColor)
        this.props.history.push('/')
    }

    handleDrawerOpen = () => {
        this.setState({ open: true })
    };

    handleDrawerClose = () => {
        this.setState({ open: false })
    };

    handleColorChange = newColor => {
        this.setState({ ...this.state, currentColor: newColor.hex })
    }

    handleInputChange = e => {
        const target = e.currentTarget
        this.setState({ [target.name]: target.value })
    }

    handleDelete = colorName => {
        this.setState({
            ...this.state, colorBoxes: this.state.colorBoxes.filter(({ name }) =>
                name !== colorName
            )
        })
    }

    handleClearColors = () => {
        this.setState({ ...this.state, colorBoxes: [] })
    }

    handleAddColorInput = () => {
        const newColor = {
            color: this.state.currentColor,
            name: this.state.colorName
        }
        this.setState({
            currentColor: 'white',
            colorName: '',
            colorBoxes: [...this.state.colorBoxes, newColor]
        })
    }

    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState(({ colorBoxes }) => ({
            colorBoxes: arrayMove(colorBoxes, oldIndex, newIndex),
        }));
    };

    render() {
        const { classes } = this.props
        const { open, currentColor, colorBoxes, colorName } = this.state

        return (

            < div className={classes.root} >
                <CssBaseline />

                <AppBar
                    position="fixed"
                    color="default"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar disableGutters={!open}>

                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerOpen}
                            edge="start"
                            className={classNames(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Typography variant="h6" noWrap>
                            Create a palette
                        </Typography>

                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.props.history.goBack}
                        >Go Back</Button>

                        <ValidatorForm onSubmit={this.handleSavePalette}>
                            <TextValidator
                                label='Palette Name'
                                name="paletteName"
                                value={this.state.paletteName}
                                onChange={this.handleInputChange}
                                validators={['required', 'isNotEmpty', 'isPaletteNameUnique']}
                                errorMessages={['Enter a palette name', 'Enter a palette name', 'Palette name already exisiting']}
                            />
                            <Button
                                type='submit'
                                variant="contained"
                                color="primary"
                            >Save Palette</Button>
                        </ValidatorForm>

                    </Toolbar>
                </AppBar>

                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >

                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
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
                            onClick={this.handleClearColors}
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

                    <ValidatorForm
                        onSubmit={this.handleAddColorInput}
                    >
                        <TextValidator
                            name='colorName'
                            value={colorName}
                            onChange={this.handleInputChange}
                            validators={['required', 'isColorNameUnique', 'isColorUnique']}
                            errorMessages={['Enter a color name', 'Color name already used', 'Color already added']}
                        />

                        <Button
                            type='submit'
                            style={{ backgroundColor: currentColor }}
                            variant="contained"
                            size="large"
                            className={classes.button}
                        >Add</Button>

                    </ValidatorForm>

                </Drawer>

                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >

                    <div className={classes.drawerHeader} />

                    <ColorBoxDraggableList
                        colorBoxes={colorBoxes}
                        handleDelete={this.handleDelete}
                        axis='xy' // drag up / down / or up & down
                        onSortEnd={this.onSortEnd} // responsible for saving the new place of the dragged box
                    />

                </main>

            </div >
        );
    }
}

export default withStyles(formStyles, { withTheme: true })(PaletteForm)