import React, { Component } from 'react';
import shortid from 'shortid';
import ColorBox from './ColorBox';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

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

                <Slider
                    defaultValue={l}
                    min={100}
                    max={900}
                    step={100}
                    onAfterChange={this.changeLevel}
                />

                <div className="Palette-colors">
                    {b}
                </div>

            </div>
        )
    }
}

export default Palette;