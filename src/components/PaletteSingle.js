import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import shortid from 'shortid';
import Footer from './Footer';
import ColorBoxSingle from './ColorBoxSingle';

class PaletteSingle extends Component {
    constructor(props) {
        super(props)
        this._shades = this.getShades(this.props.palette, this.props.colorId)
    }

    getShades = (palette, colorId) => {
        let shades = []
        let allColors = palette.colors;
        for (let level in allColors) {
            allColors[level].forEach(c => {
                console.log(c)
                if (c.id == colorId) {
                    shades.push({
                        name: c.name,
                        hex: c.hex,
                        rgb: c.rgb,
                        rgba: c.rgba
                    })
                }
            })
        }
        return shades
    }

    render() {

        if (!this.props.palette) { return (<Redirect to="/" />) }
        const { paletteName, emoji, colors, id } = this.props.palette;
        const b = this._shades.map(c => {
            return (
                <ColorBoxSingle
                    key={shortid.generate()}
                    background={c.hex}
                    colorName={c.name}
                />
            )
        })

        return (
            <div className='Palette'>

                <div className="Palette-colors">
                    {b}
                </div>

                <Footer
                    paletteName={paletteName}
                    emoji={emoji}
                />

            </div>
        )
    }
}

export default PaletteSingle;