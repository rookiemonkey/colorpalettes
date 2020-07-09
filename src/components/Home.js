import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shortid from 'shortid';

class Home extends Component {
    render() {

        const { palettes } = this.props
        const minipalettes = palettes.map(p => {
            return (
                <section key={shortid.generate()}>
                    <Link to={`/palette/${p.id}`}>{p.paletteName}</Link>
                </section>
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