import React, { Component } from 'react';
import { ChromePicker } from 'react-color'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import paletteFormDrawerStyles from '../styles/formdrawer';

class PaletteFormDrawer extends Component {

    componentDidMount() {
        ValidatorForm.addValidationRule("isColorNameUnique", value =>
            this.props.colorBoxes.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
        );
        ValidatorForm.addValidationRule("isColorUnique", value =>
            this.props.colorBoxes.every(({ color }) => color !== this.props.currentColor)
        );
    }

    render() {

        const {
            isDrawerOpen, classes,
            isFull, currentColor, colorName,
            handleDrawerClose, handleClearColors,
            handleRandomColor, handleColorChange,
            handleAddColorInput, handleInputChange } = this.props;

        return (

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

                    <Typography variant="h6">
                        DESIGN YOUR PALETTE
                    </Typography>

                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>

                </div>

                <Divider />

                <div className={classes.drawerButtonsContainer}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleClearColors}
                        className={classes.drawerButton}
                    >Clear</Button>

                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleRandomColor}
                        disabled={isFull}
                        className={classes.drawerButton}
                    >Random</Button>
                </div>

                <ChromePicker
                    color={currentColor}
                    onChange={handleColorChange}
                    className={classes.drawerColorPicker}
                />

                <ValidatorForm
                    onSubmit={handleAddColorInput}
                >
                    <TextValidator
                        placeholder='Color Name'
                        variant='filled'
                        name='colorName'
                        value={colorName}
                        onChange={handleInputChange}
                        disabled={isFull}
                        className={classes.drawerInputField}
                        validators={['required', 'isColorNameUnique', 'isColorUnique']}
                        errorMessages={['Enter a color name', 'Color name already used', 'Color already added']}
                    />

                    <Button
                        type='submit'
                        style={{ backgroundColor: currentColor }}
                        variant="contained"
                        size="large"
                        className={classes.drawerAddButton}
                        disabled={isFull}
                    >{isFull ? 'Palette full' : 'Add'}</Button>

                </ValidatorForm>

            </Drawer>

        )
    }
}

export default withStyles(paletteFormDrawerStyles, { withTheme: true })(PaletteFormDrawer)