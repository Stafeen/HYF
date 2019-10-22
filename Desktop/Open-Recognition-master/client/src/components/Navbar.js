import React from 'react'
import {Link} from 'react-router-dom';
//Material ui stuff
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
//import Typography from '@material-ui/core/Typography';
//import Logo from '../assets/image/logo.jpeg';
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
  }));
export default function SearchAppBar() {
    const classes = useStyles();
        return (
           <AppBar>
                <Toolbar className="nav-container">
               <Button color="inherit" component={Link} to="/">Home</Button>
               <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
               <Button color="inherit" component={Link} to="/login">Login</Button>
               {/* <Button color="inherit" component={Link} to="/profile">Profile</Button> */}
              
               {/* <img className="appbar-logo" src={Logo} alt="trust"/> */}
            <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Find people"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          </Toolbar>
         </AppBar>
        )
    }



