import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withStyles } from '@material-ui/styles';
import generateTextColor from '../helpers/generateTextColor';
import colorBoxSingleStyles from '../styles/colorboxsingle';

class ColorBoxSingle extends Component {
    constructor(props) {
        super(props)
        this.state = { copied: false }
    }

    handleCopy = () => {
        this.setState({ copied: true }, () => {
            setTimeout(() => { this.setState({ copied: false }) }, 2000)
        })
    }

    render() {

        const { copied } = this.state;
        const { classes, background, colorName } = this.props;
        const b = { background }
        const t = { color: generateTextColor(background) }
        let shadow; if (t.color === 'white') { shadow = 'black' } else { shadow = 'white' }
        const s = {
            color: generateTextColor(background),
            textShadow: `1px 2px ${shadow}`
        }
        return (
            <div className={classes.ColorBoxContainer} style={b}>

                <div
                    className={copied
                        ? `${classes.ColorBoxOverlay} ${classes.ColorBoxCopied}`
                        : `${classes.ColorBoxOverlay}`}
                    style={b}
                ></div>

                <div className={copied
                    ? `${classes.ColorBoxOverlayMessage} ${classes.Show}`
                    : `${classes.ColorBoxOverlayMessage}`}
                >
                    <h1 style={s}>COPIED!</h1>
                    <p style={s}>{colorName}</p>
                    <p style={s}>{background}</p>
                </div>

                <div>
                    <div className={classes.ColorBoxContentContainer}>
                        <span style={t}>{colorName}</span>
                    </div>
                    <CopyToClipboard text={background}>
                        <button
                            onClick={this.handleCopy}
                            className={classes.ColorBoxCopy}
                            style={t}
                        >COPY</button>
                    </CopyToClipboard>
                </div>

            </div>
        )
    }
}

export default withStyles(colorBoxSingleStyles)(ColorBoxSingle);