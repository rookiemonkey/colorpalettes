import React from 'react';

const Footer = props => {
    return (
        <footer className='Footer-container'>
            <span>{props.paletteName} {props.emoji}</span>
        </footer>
    )
}

export default Footer;