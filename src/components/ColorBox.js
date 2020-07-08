import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class ColorBox extends Component {
    constructor(props) {
        super(props)
        this.state = { copied: false }
    }

    handleCopy = () => {
        this.setState({ copied: true }, () => {
            setTimeout(() => { this.setState({ copied: false }) }, 1500)
        })
    }

    render() {

        const { copied } = this.state;
        const { background, colorName } = this.props;
        const s = { background }

        return (
            <div className="ColorBox-container" style={s}>

                <div
                    className={copied ? 'ColorBox-overlay ColorBox-copied' : 'ColorBox-overlay'}
                    style={s}
                ></div>

                <div className={copied ? 'ColorBox-overlay-message show' : 'ColorBox-overlay-message'}>
                    <h1>COPIED!</h1>
                    <p>{background}</p>
                </div>

                <div className="ColorBox-copy-container">
                    <div className="ColorBox-content-container">
                        <span className='ColorBox-name'>{colorName}</span>
                    </div>
                    <CopyToClipboard text={background}>
                        <button
                            onClick={this.handleCopy}
                            className="ColorBox-copy"
                        >COPY</button>
                    </CopyToClipboard>
                </div>

                <span className='ColorBox-more'>MORE</span>

            </div>
        )
    }
}

export default ColorBox;