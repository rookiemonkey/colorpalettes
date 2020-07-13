import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import Select from '@material-ui/core/Select';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import navBarStyles from '../styles/navbar';

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

        const { level, classes } = this.props;
        const { format } = this.state;

        return (
            <nav className={classes.NavbarContainer}>

                <div className={classes.NavbarLogoContainer}>
                    <Link to='/'>React Color Picker</Link>
                </div>

                {
                    this.props.match.path !== "/palette/:id/:colorid"
                        ? <div className={classes.NavbarSliderContainer}>

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

                <div className={classes.SelectContainer}>
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

export default withRouter(withStyles(navBarStyles)(NavBar));