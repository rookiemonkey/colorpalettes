import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import shortid from 'shortid';
import { withStyles } from '@material-ui/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import homeStyles from '../styles/home';
import MiniPalette from './MiniPalette';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDeleteDialogOpen: false,
            toBeDeletedPaletteId: ''
        }
    }

    handleClick = id => {
        this.props.history.push(`/palette/${id}`)
    }

    handleOpenDeleteDialog = id => {
        this.setState({
            isDeleteDialogOpen: true,
            toBeDeletedPaletteId: id
        })
    }

    helpDeletePalette = id => {
        this.props.deletePalette(id)
        this.setState({ isDeleteDialogOpen: false, toBeDeletedPaletteId: '' })
    }

    handleCloseDeleteDialog = () => {
        this.setState({ isDeleteDialogOpen: false })
    }

    render() {
        const { isDeleteDialogOpen, toBeDeletedPaletteId } = this.state
        const { palettes, classes } = this.props
        const minipalettes = palettes.map((p, i) => {
            return (
                <CSSTransition
                    key={shortid.generate()}
                    classNames='fade'
                    timeout={1000}>

                    <MiniPalette
                        {...palettes[i]}
                        key={shortid.generate()}
                        deletePalette={this.handleOpenDeleteDialog}
                        handleClick={this.handleClick}
                    />

                </CSSTransition>
            )
        })

        return (
            <article className={classes.root} >
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
                        <Link to='/palette/new' style={{ color: 'white' }}>Add Palette</Link>
                    </nav>
                    <TransitionGroup className={classes.palettes}>
                        {minipalettes}
                    </TransitionGroup>
                </div>

                <Dialog
                    open={isDeleteDialogOpen}
                    onClose={this.handleCloseDeleteDialog}
                    aria-labelledby="delete-dialog-title"
                >

                    <DialogTitle id="delete-dialog-title">
                        Delete palete?
                    </DialogTitle>

                    <List>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar
                                    style={{ background: blue[100], color: blue[600], cursor: 'pointer' }}
                                    onClick={() => { this.helpDeletePalette(toBeDeletedPaletteId) }}
                                ><CheckIcon /></Avatar>
                            </ListItemAvatar>
                            <ListItemText primary='Delete' />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar
                                    style={{ background: red[100], color: red[600], cursor: 'pointer' }}
                                    onClick={this.handleCloseDeleteDialog}
                                ><CloseIcon /></Avatar>
                            </ListItemAvatar>
                            <ListItemText primary='Cancel' />
                        </ListItem>
                    </List>

                </Dialog>
            </article>
        )
    }
}

export default withStyles(homeStyles)(Home);