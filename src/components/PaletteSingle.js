import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import shortid from 'shortid';
import NavBar from './NavBar';
import Footer from './Footer';
import ColorBoxSingle from './ColorBoxSingle';

class PaletteSingle extends Component {
    constructor(props) {
        super(props)
        this.state = { format: 'hex', changedFormat: false }
        this._shades = this.getShades(this.props.palette, this.props.colorId)
    }

    getShades = (palette, colorId) => {
        let shades = []
        let allColors = palette.colors;
        for (let level in allColors) {
            allColors[level].forEach(c => {
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

    changeFormat = format => {
        this.setState({ ...this.state, format: format, changedFormat: true }, () => {
            setTimeout(() => {
                this.setState({ ...this.state, changedFormat: false })
            }, 3000)
        })
    }


    render() {

        if (!this.props.palette) { return (<Redirect to="/" />) }
        const { paletteName, emoji, colors, id } = this.props.palette;
        const b = this._shades.map(c => {
            if (c.hex === '#ffffff') return null
            return (
                <ColorBoxSingle
                    key={shortid.generate()}
                    background={c[this.state.format]}
                    colorName={c.name}
                />
            )
        })

        return (
            <div className='Palette'>

                <NavBar
                    changeFormat={this.changeFormat}
                    changeLevel={() => { }}
                    level=''
                />

                <div className="Palette-colors">
                    {b}
                </div>

                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.changedFormat}
                    autoHideDuration={3000}
                    message={<span id="message-id">Color format changed to {this.state.format}</span>}
                    ContentProps={{
                        'aria-describedby': 'message-id'
                    }}
                />

                <Footer
                    paletteName={paletteName}
                    emoji={emoji}
                />

            </div>
        )
    }
}

export default PaletteSingle;