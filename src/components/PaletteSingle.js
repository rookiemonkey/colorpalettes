import React, { Component } from 'react';

class PaletteSingle extends Component {
    constructor(props) {
        super(props)
        this._shades = this.getShades(this.props.palette, this.props.colorId)
    }

    getShades = (palette, colorId) => {
        let shades = {}
        let allColors = palette.colors;
        for (let level in allColors) {
            allColors[level].forEach(c => {
                if (c.id == colorId) {
                    shades[level] = {
                        level: level,
                        hex: c.hex,
                        rgb: c.rgb,
                        rgba: c.rgba
                    }
                }
            })
        }
        return shades
    }

    render() {

        return (
            <h1>Color Box Single</h1>
        )
    }
}

export default PaletteSingle;