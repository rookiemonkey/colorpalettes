import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Select from '@material-ui/core/Select';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { MenuItem } from '@material-ui/core';

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = { format: 'hex' }
    }

    handleChange = lvl => {
        this.props.changeLevel(lvl)
    }

    handleChangeFormat = e => {
        this.setState({ format: e.target.value }, () => {
            this.props.changeFormat(e.target.value)
        })
    }

    render() {

        const { level } = this.props;
        const { format } = this.state;

        return (
            <nav className="Navbar-container">

                <div className="Navbar-logo-container">
                    <Link to='/'>React Color Picker</Link>
                </div>

                {
                    this.props.match.path !== "/palette/:id/:colorid"
                        ? <div className="Navbar-slider-container">

                            <span className="Navbar-level">
                                Level: {level}
                            </span>

                            <div className="Navbar-slider">
                                <Slider
                                    defaultValue={level}
                                    min={100}
                                    max={900}
                                    step={100}
                                    onAfterChange={this.handleChange}
                                />
                            </div>

                        </div>
                        : null
                }

                <div className="Select-container">
                    <Select value={format} onChange={this.handleChangeFormat}>
                        <MenuItem value='hex'>HEX #ffffff</MenuItem>
                        <MenuItem value='rgb'>RGB rgb(255, 255, 255)</MenuItem>
                        <MenuItem value='rgba'>RGBA rgba(255, 255, 255, 1.0)</MenuItem>
                    </Select>
                </div>

            </nav>
        )
    }
}

export default withRouter(NavBar);