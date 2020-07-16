import React, { Component } from 'react'
import '../styles/404.css'

class Error404 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
        }
    }

    componentDidMount() {
        this.setState({ isLoaded: true })
    }

    render() {

        const s = { marginLeft: '200px' }

        return (
            <div class={this.state.isLoaded ? `cont_principal cont_error_active` : `cont_principal`}>
                <div class="cont_error">

                    <h1 style={s}>Oops</h1>
                    <p style={s}>The Page you're looking for isn't here.</p>

                </div>
                <div class="cont_aura_1"></div>
                <div class="cont_aura_2"></div>
            </div>
        )
    }
}

export default Error404;