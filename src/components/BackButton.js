import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import backButtonStyles from '../styles/backbutton';

class BackButton extends Component {
    render() {
        const { classes, goBack } = this.props;

        return (
            <div className={classes.backButtonContainer}>

                <div
                    className={classes.colorBoxOverlay}
                ></div>

                <div className={classes.colorBoxOverlayMessage}>
                    <h1>COPIED!</h1>
                </div>

                <div className={classes.colorBoxCopyContainer} >
                    <div className={classes.colorBoxContentContainer} >
                    </div>
                    <button
                        className={classes.backButton}
                        onClick={() => { goBack() }}
                    >BACK</button>
                </div>

            </div>
        )
    }
}

export default withStyles(backButtonStyles)(BackButton);