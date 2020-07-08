import React, { Component } from 'react';
import shortid from 'shortid';
import ColorBox from './ColorBox';

class Palette extends Component {
    render() {

        const b = this.props.colors.map(c => (
            <ColorBox
                key={shortid.generate()}
                background={c.color}
                colorName={c.name}
            />
        ))

        return (
            <div className="Palette">
                <div className="Palette-colors">
                    {b}
                </div>
            </div>
        )
    }
}

export default Palette;