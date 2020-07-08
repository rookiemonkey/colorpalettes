import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class ColorBox extends Component {
    render() {

        const { background, colorName } = this.props
        const s = { background }

        return (
            <div className="ColorBox-container" style={s}>
                <div className="ColorBox-copy-container">
                    <div className="ColorBox-content-container">
                        <span className='ColorBox-name'>{colorName}</span>
                    </div>
                    <CopyToClipboard text={background}>
                        <button className="ColorBox-copy">COPY</button>
                    </CopyToClipboard>
                </div>
                <span className='ColorBox-more'>MORE</span>
            </div>
        )
    }
}

export default ColorBox;