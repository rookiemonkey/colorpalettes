import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import shortid from 'shortid';

class Home extends Component {
    render() {

        const { palettes } = this.props
        const minipalettes = palettes.map((p, i) => {
            return (
                <MiniPalette {...palettes[i]} />
            )
        })

        return (
            <article>
                {minipalettes}
            </article>
        )
    }
}

export default Home;