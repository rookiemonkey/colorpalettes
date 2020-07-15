import React, { Component } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

class PaletteFormDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    componentDidMount() {
        ValidatorForm.addValidationRule("isNotEmpty", value => value !== '');
        ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
            this.props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
        );
    }

    paletteNameChange = e => {
        this.props.helpHandlePaletteNameChange(e.target.value)
    }

    render() {

        const { open, handleCloseDialog, helpHandleSavePalette, paletteName } = this.props

        return (
            <Dialog
                open={open}
                onClose={handleCloseDialog}
                aria-labelledby="form-dialog-title"
            >

                <DialogTitle id="form-dialog-title">
                    Enter a name for your palette
                    </DialogTitle>

                <DialogContent>

                    <DialogContentText>
                        Please give a name for your palette. Make sure taht it is unique.
                        </DialogContentText>

                    <ValidatorForm onSubmit={helpHandleSavePalette}>

                        <TextValidator
                            label='Palette Name'
                            name="paletteName"
                            value={paletteName}
                            onChange={this.paletteNameChange}
                            fullWidth={true}
                            margin='normal'
                            validators={['required', 'isNotEmpty', 'isPaletteNameUnique']}
                            errorMessages={['Enter a palette name', 'Enter a palette name', 'Palette name already exisiting']}
                        />

                        <DialogActions>

                            <Button
                                type='submit'
                                variant="contained"
                                color="primary"
                            >Save Palette</Button>

                            <Button
                                onClick={handleCloseDialog}
                                color="primary"
                            >Cancel</Button>

                        </DialogActions>

                    </ValidatorForm>
                </DialogContent>
            </Dialog>
        );
    }
}

export default PaletteFormDialog;
