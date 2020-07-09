import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Footer from './Footer';
import shortid from 'shortid';
import NavBar from './NavBar';
import ColorBox from './ColorBox';

class Palette extends Component {
    constructor(props) {
        super(props)
        this.state = { level: 500, format: 'hex', changedFormat: false }
    }

    changeLevel = newLevel => { this.setState({ ...this.state, level: newLevel }) }

    changeFormat = format => {
        this.setState({ ...this.state, format: format, changedFormat: true }, () => {
            setTimeout(() => {
                this.setState({ ...this.state, changedFormat: false })
            }, 3000)
        })
    }

    render() {

        const { paletteName, emoji, colors } = this.props.palette;
        const { level, format, changedFormat } = this.state;
        const b = colors[level].map(c => {
            return (
                <ColorBox
                    key={shortid.generate()}
                    background={c[format]}
                    colorName={c.name}
                />
            )
        })

        return (
            <div className="Palette">

                <NavBar
                    changeFormat={this.changeFormat}
                    changeLevel={this.changeLevel}
                    level={level}
                />

                <div className="Palette-colors">
                    {b}
                </div>

                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={changedFormat}
                    autoHideDuration={3000}
                    message={<span id="message-id">Color format changed to {format}</span>}
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

export default Palette;