import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import { withRouter } from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = props => {
  // const { history } = props; 
  const history = useHistory();
  const [{cart, loggedinuser}, dispatch] = useStateValue();
  // console.log("cart=====>", cart);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const menuItems = [
      {
        menuTitle: "Login",
        pageURL: "/login"
      },
      {
        menuTitle: "Customer Support",
        pageURL: "/customersupport"
      },
      {
        menuTitle: "About",
        pageURL: "/about"
      },
    ]

  // const handleCart = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleMenuBar = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // const handleMenuClick = (pageURL) => {
  //   history.push(pageURL);
  //   setAnchorEl(null);
  // };

  const logoutUser = () => {
    if(loggedinuser) {
      auth.signOut();
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
           edge="start" 
           className={classes.menuButton} 
           color="inherit" 
           aria-label="menu"
           onClick={handleMenuBar}
           >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Online Bakery Site
          </Typography>
            <div>
              <Link to="/checkout" className="header__cartLink">
                <div className="header__optionCart">
                    <ShoppingCartIcon />
                    <span className="header__productCount">{cart ? cart.length : null}</span>
                </div>  
              </Link>
              {/* <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleCart}
                color="inherit"
              >
                <ShoppingCartIcon />
              </IconButton> */}
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
              {/* {menuItems.map(menuItem => {
                  const {menuTitle, pageURL} = menuItem;
                  return (
                    <Link to={pageURL}>
                      <MenuItem onClick={() => handleMenuClick(pageURL)}>{menuTitle}</MenuItem>
                    </Link>
                  );
              })} */}

              <Link to={!loggedinuser && '/login'}>
                <MenuItem onClick={logoutUser}>{loggedinuser ? 'Logout' : 'Login'}</MenuItem>
              </Link>
              
              {loggedinuser && <Link to='/address'>
                <MenuItem>Address</MenuItem>
              </Link>}
              

              <Link to='/customerSupport'>
                <MenuItem>Customer Support</MenuItem>
              </Link>
              <Link to='/about'>
                <MenuItem>About</MenuItem>
              </Link>
                
                
                
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;