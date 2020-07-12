import React from 'react';
import { withStyles } from '@material-ui/styles';
import footerStyles from '../styles/footer';

const Footer = props => {
    const { classes } = props

    return (
        <footer className={classes.FooterContainer}>
            <span>{props.paletteName} {props.emoji}</span>
        </footer>
    )
}

export default withStyles(footerStyles)(Footer);