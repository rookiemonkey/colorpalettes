import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class NavBar extends Component {

    handleChange = lvl => {
        this.props.changeLevel(lvl)
    }

    render() {
        return (
            <header className="Navbar-container">

                <div className="Navbar-logo-container">
                    <a href='#'>React Color Picker</a>
                </div>

                <div className="Navbar-slider-container">

                    <span className="Navbar-level">
                        Level: {this.props.level}
                    </span>

                    <div className="Navbar-slider">
                        <Slider
                            defaultValue={this.props.level}
                            min={100}
                            max={900}
                            step={100}
                            onAfterChange={this.handleChange}
                        />
                    </div>

                </div>

            </header>
        )
    }
}

export default NavBar;