import React, { Component } from 'react';
import shortid from 'shortid';
import NavBar from './NavBar';
import ColorBox from './ColorBox';

class Palette extends Component {
    constructor(props) {
        super(props)
        this.state = { level: 500 }
    }

    changeLevel = newLevel => { this.setState({ level: newLevel }) }

    render() {

        const l = this.state.level
        const b = this.props.palette.colors[l].map(c => {
            return (
                <ColorBox
                    key={shortid.generate()}
                    background={c.hex}
                    colorName={c.name}
                />
            )
        })

        return (
            <div className="Palette">

                <NavBar changeLevel={this.changeLevel} level={l} />

                <div className="Palette-colors">
                    {b}
                </div>

            </div>
        )
    }
}

export default Palette;