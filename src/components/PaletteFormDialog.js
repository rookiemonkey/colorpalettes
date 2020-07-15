import React, { Component } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

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

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    paletteNameChange = e => {
        this.props.helpHandlePaletteNameChange(e.target.value)
    }

    render() {

        const { helpHandleSavePalette, paletteName } = this.props

        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    SAVE
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogContent>
                        <ValidatorForm onSubmit={helpHandleSavePalette}>

                            <TextValidator
                                label='Palette Name'
                                name="paletteName"
                                value={paletteName}
                                onChange={this.paletteNameChange}
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
                                    onClick={this.handleClose}
                                    color="primary"
                                >Cancel</Button>

                            </DialogActions>
                        </ValidatorForm>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

export default PaletteFormDialog;
