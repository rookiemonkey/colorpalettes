import React, { Component } from 'react';

class ColorBox extends Component {
    render() {

        const s = { background: this.props.background }

        return (
            <div className="ColorBox" style={s}>
                <span>{this.props.colorName}</span>
                <span>More</span>
            </div>
        )
    }
}

export default ColorBox;