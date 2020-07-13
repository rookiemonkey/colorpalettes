import React, { Component } from 'react';
import { ChromePicker } from 'react-color'
import shortid from 'shortid';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import classNames from 'classnames';
import ColorBoxDraggable from './ColorBoxDraggable';
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
import SaveIcon from '@material-ui/icons/Save';
import formStyles from '../styles/form';

class PaletteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            currentColor: 'white',
            colorName: '',
            colorBoxes: []
        }
    }

    componentDidMount() {
        ValidatorForm.addValidationRule("isColorNameUnique", value =>
            this.state.colorBoxes.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
        );
        ValidatorForm.addValidationRule("isColorUnique", value =>
            this.state.colorBoxes.every(({ color }) => color !== this.state.currentColor)
        );
    }

    handleSavePalette = () => {
        let newName = 'New Test Colors'
        const newColor = {
            paletteName: newName,
            id: newName.toLowerCase().replaceAll(' ', '-'),
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

    render() {
        const { classes } = this.props
        const { open, currentColor, colorBoxes, colorName } = this.state
        const boxes = colorBoxes.map(color => {
            return <ColorBoxDraggable color={color} key={shortid.generate()} />
        })

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
                            onClick={this.handleSavePalette}
                        >Save Palette</Button>

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
                            errorMessages={['Enter a color name', 'Color already existing', 'Color already used']}
                        />

                        <Button
                            type='submit'
                            style={{ backgroundColor: currentColor }}
                            variant="contained"
                            size="large"
                            className={classes.button}
                            startIcon={<SaveIcon />}
                        >Add</Button>

                    </ValidatorForm>

                </Drawer>

                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >

                    <div className={classes.drawerHeader} />

                    {boxes}

                </main>

            </div >
        );
    }
}

export default withStyles(formStyles, { withTheme: true })(PaletteForm)