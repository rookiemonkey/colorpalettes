import React, { Component } from 'react';
import chroma from 'chroma-js';
import classNames from 'classnames';
import ColorBoxDraggableList from './ColorBoxDraggableList';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import formStyles from '../styles/form';
import arrayMove from '../helpers/arrayMove';
import PaletteFormNavBar from './PaletteFormNavBar';
import PaletteFormDrawer from './PaletteFormDrawer'
import starter from '../helpers/starter';

class PaletteForm extends Component {
    static defaultProps = {
        maxColors: 20,
    }

    constructor(props) {
        super(props);
        this.state = {
            isDrawerOpen: false,
            paletteName: '',
            colorName: '',
            currentColor: '',
            colorBoxes: starter
        }
    }

    handleSavePalette = emoji => {
        const newColor = {
            paletteName: this.state.paletteName,
            id: this.state.paletteName.toLowerCase().replaceAll(' ', '-'),
            emoji: emoji,
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

    handlePaletteNameChange = name => {
        this.setState({ ...this.state, paletteName: name })
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
        const randomColor = chroma.random()
        const [r, g, b, a] = randomColor._rgb
        const rgbColor = `rgb(${r}, ${g}, ${b})`
        this.setState({ ...this.state, currentColor: chroma(rgbColor).hex() })
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
        const { isDrawerOpen, colorBoxes, paletteName } = this.state
        const isFull = colorBoxes.length >= maxColors

        return (

            < div className={classes.root} >
                <CssBaseline />

                <PaletteFormNavBar
                    isDrawerOpen={isDrawerOpen}
                    paletteName={paletteName}
                    handleDrawerOpen={this.handleDrawerOpen}
                    handleSavePalette={this.handleSavePalette}
                    handlePaletteNameChange={this.handlePaletteNameChange}
                    palettes={this.props.palettes}
                />

                <PaletteFormDrawer
                    {...this.state}
                    isFull={isFull}
                    handleDrawerClose={this.handleDrawerClose}
                    handleClearColors={this.handleClearColors}
                    handleRandomColor={this.handleRandomColor}
                    handleColorChange={this.handleColorChange}
                    handleAddColorInput={this.handleAddColorInput}
                    handleInputChange={this.handleInputChange}
                />

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