import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import paletteFormDialogStyles from '../styles/paletteformdialog';

class PaletteFormDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: '',
            currentEmoji: ''
        };
    }

    componentDidMount() {
        ValidatorForm.addValidationRule("isNotEmpty", value => value !== '');
        ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
            this.props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
        );
        this.setState({ currentEmoji: '', step: 'form-paletteName' })
    }

    paletteNameChange = e => {
        this.props.helpHandlePaletteNameChange(e.target.value)
    }

    handleNextStep = () => {
        this.setState({ ...this.state, step: 'form-emoji' })
    }

    emojiChange = emoji => {
        this.setState({ currentEmoji: emoji.native })

    }

    handleSubmit = () => {
        this.props.helpHandleSavePalette(this.state.currentEmoji)
        this.setState({ step: '', currentEmoji: '' })
    }

    render() {

        const { handleCloseDialog, paletteName, classes } = this.props

        return (
            <>
                <Dialog
                    open={this.state.step === 'form-paletteName'}
                    onClose={handleCloseDialog}
                    aria-labelledby="form-dialog-title"
                >

                    <DialogTitle id="form-dialog-title">
                        Enter a name for your palette 🖌
                </DialogTitle>

                    <DialogContent>

                        <DialogContentText>
                            Please give a name for your palette. Make sure that it is unique.
                        </DialogContentText>

                        <ValidatorForm onSubmit={this.handleNextStep}>

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
                                >Save Name</Button>

                                <Button
                                    onClick={handleCloseDialog}
                                    color="primary"
                                >Cancel</Button>

                            </DialogActions>

                        </ValidatorForm>
                    </DialogContent>
                </Dialog>

                <Dialog
                    open={this.state.step === 'form-emoji'}
                    onClose={handleCloseDialog}
                    aria-labelledby="form-dialog-title"
                >

                    <DialogContent>

                        <DialogContentText>
                            Please select an emoji that describes your palette.
                            Chosen Emoji: {this.state.currentEmoji}
                        </DialogContentText>

                        <div className={classes.emoji_container}>
                            <Picker onSelect={this.emojiChange} style={{ width: '100%' }} />
                        </div>

                        <DialogActions>

                            <Button
                                type='submit'
                                variant="contained"
                                color="primary"
                                onClick={this.handleSubmit}
                            >Save Palette</Button>

                            <Button
                                onClick={handleCloseDialog}
                                color="primary"
                            >Cancel</Button>

                        </DialogActions>

                    </DialogContent>

                </Dialog>

            </>
        );
    }
}

export default withStyles(paletteFormDialogStyles)(PaletteFormDialog);
