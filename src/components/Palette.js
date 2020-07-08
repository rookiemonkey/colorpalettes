import React, { Component } from 'react';
import shortid from 'shortid';
import NavBar from './NavBar';
import ColorBox from './ColorBox';

class Palette extends Component {
    constructor(props) {
        super(props)
        this.state = { level: 500, format: 'hex' }
    }

    changeLevel = newLevel => { this.setState({ ...this.state, level: newLevel }) }

    changeFormat = format => { this.setState({ ...this.state, format: format }) }

    render() {

        const { level, format } = this.state
        const b = this.props.palette.colors[level].map(c => {
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

            </div>
        )
    }
}

export default Palette;