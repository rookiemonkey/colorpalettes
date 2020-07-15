import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import generateTextColor from '../helpers/generateTextColor';

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
        const { background, colorName } = this.props;
        const b = { background }
        const t = { color: generateTextColor(background) }
        let shadow; if (t.color === 'white') { shadow = 'black' } else { shadow = 'white' }
        const s = {
            color: generateTextColor(background),
            textShadow: `1px 2px ${shadow}`
        }
        return (
            <div className="ColorBox-container" style={b} id="ColorBox-single">

                <div
                    className={copied ? 'ColorBox-overlay ColorBox-copied' : 'ColorBox-overlay'}
                    style={b}
                ></div>

                <div className={copied ? 'ColorBox-overlay-message show' : 'ColorBox-overlay-message'}>
                    <h1 style={s}>COPIED!</h1>
                    <p style={s}>{colorName}</p>
                    <p style={s}>{background}</p>
                </div>

                <div className="ColorBox-copy-container" >
                    <div className="ColorBox-content-container">
                        <span style={t}>{colorName}</span>
                    </div>
                    <CopyToClipboard text={background}>
                        <button
                            onClick={this.handleCopy}
                            className="ColorBox-copy"
                            style={t}
                        >COPY</button>
                    </CopyToClipboard>
                </div>

            </div>
        )
    }
}

export default ColorBoxSingle;