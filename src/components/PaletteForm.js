import React, { Component } from 'react';
import chroma from 'chroma-js';
import { ChromePicker } from 'react-color'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import classNames from 'classnames';
import ColorBoxDraggableList from './ColorBoxDraggableList';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import formStyles from '../styles/form';
import arrayMove from '../helpers/arrayMove';
import PaletteFormNavBar from './PaletteFormNavBar';

class PaletteForm extends Component {
    static defaultProps = {
        maxColors: 20
    }

    constructor(props) {
        super(props);
        this.state = {
            isDrawerOpen: false,
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
        this.setState({ isDrawerOpen: true })
    };

    handleDrawerClose = () => {
        this.setState({ isDrawerOpen: false })
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

    handleRandomColor = () => {
        this.setState({ ...this.state, currentColor: chroma.random() })
    }

    handleAddColorInput = () => {
        if (this.state.colorBoxes.length <= 20) {
            const newColor = {
                color: this.state.currentColor,
                name: this.state.colorName
            }
            this.setState({
                currentColor: 'white',
                colorName: '',
                colorBoxes: [...this.state.colorBoxes, newColor]
            })
        } else {
            this.setState({
                paletteName: '',
                colorName: '',
                currentColor: '',
            })
        }
    }

    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState(({ colorBoxes }) => ({
            colorBoxes: arrayMove(colorBoxes, oldIndex, newIndex),
        }));
    };

    render() {
        const { classes, maxColors } = this.props
        const { isDrawerOpen, currentColor, colorBoxes, colorName } = this.state
        const isFull = colorBoxes.length >= maxColors

        return (

            < div className={classes.root} >
                <CssBaseline />

                <PaletteFormNavBar
                    isDrawerOpen={isDrawerOpen}
                    handleDrawerOpen={this.handleDrawerOpen}
                    handleSavePalette={this.handleSavePalette}
                    handleInputChange={this.handleInputChange}
                    paletteName={this.state.paletteName}
                    palettes={this.props.palettes}
                />

                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={isDrawerOpen}
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
                            onClick={this.handleRandomColor}
                            disabled={isFull}
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
                            disabled={isFull}
                            validators={['required', 'isColorNameUnique', 'isColorUnique']}
                            errorMessages={['Enter a color name', 'Color name already used', 'Color already added']}
                        />

                        <Button
                            type='submit'
                            style={{ backgroundColor: currentColor }}
                            variant="contained"
                            size="large"
                            className={classes.button}
                            disabled={isFull}
                        >{isFull ? 'Palette full' : 'Add'}</Button>

                    </ValidatorForm>

                </Drawer>

                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: isDrawerOpen,
                    })}
                >

                    <div className={classes.drawerHeader} />

                    <ColorBoxDraggableList
                        colorBoxes={colorBoxes}
                        handleDelete={this.handleDelete}
                        axis='xy' // drag up / down / or up & down
                        onSortEnd={this.onSortEnd} // responsible for saving the new place of the dragged box
                        distance={20} // where dragging can start, if not set delete will not work instead drag event will occur and not click event
                    />

                </main>

            </div >
        );
    }
}

export default withStyles(formStyles, { withTheme: true })(PaletteForm)