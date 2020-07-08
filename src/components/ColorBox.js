import React, { Component } from 'react';

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
                    <button className="ColorBox-copy">COPY</button>
                </div>
                <span className='ColorBox-more'>MORE</span>
            </div>
        )
    }
}

export default ColorBox;