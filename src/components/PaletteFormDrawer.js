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
                    <IconButton onClick={handleDrawerClose}>
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
                        onClick={handleClearColors}
                    >Clear</Button>

                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleRandomColor}
                        disabled={isFull}
                    >Random</Button>
                </div>

                <ChromePicker
                    color={currentColor}
                    onChange={handleColorChange}
                />

                <ValidatorForm
                    onSubmit={handleAddColorInput}
                >
                    <TextValidator
                        name='colorName'
                        value={colorName}
                        onChange={handleInputChange}
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

        )
    }
}

export default withStyles(paletteFormDrawerStyles, { withTheme: true })(PaletteFormDrawer)