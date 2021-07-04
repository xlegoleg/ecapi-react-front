import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Toolbar, Button, Box, IconButton, Typography, AppBar } from '@material-ui/core';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { HeaderMainNav } from '@components/navs/header-main-nav/HeaderMainNav';
import { HeaderContact } from '@components/headers/header-contact/HeaderContact';
import { BaseLoginModal } from '@components/base/modals/BaseLoginModal';
import { BaseRegisterModal } from '@components/base/modals/BaseRegisterModal';
import { BaseLogoutModal } from '@components/base/modals/BaseLogoutModal';
import { IRootState } from '@interfaces/state';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    toolbar: {
      justifyContent: 'space-between'
    }
  });
});


export const HeaderMain: React.FC = (props) => {
  const title = 'Beer-to-peer';
  const classes = useStyles();

  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [openLogout, setOpenLogout] = useState(false);


  const isLoggedIn = useSelector((state: IRootState) => state.user.userIsLoggedIn);

  const handleLoginModalOpen = () => {
    setOpenLogin(true);
  }

  const handleLoginModalClose = () => {
    setOpenLogin(false);
  }

  const handleRegisterModalOpen = () => {
    setOpenRegister(true);
  }

  const handleRegisterModalClose = () => {
    setOpenRegister(false);
  }

  const handleLogoutModalOpen = () => {
    setOpenLogout(true);
  }

  const handleLogoutModalClose = () => {
    setOpenLogout(false);
  }

  return (
      <AppBar position="static" color="primary">
        <HeaderContact/>
        <Toolbar className={classes.toolbar}>
          {/* TODO set title from CMS */}
          <Box display="flex" alignItems="center">
            <Typography variant='h6'>{title}</Typography>
            <LocalDrinkIcon fontSize='small'/>
          </Box>
          <Box>
            <HeaderMainNav/>
          </Box>
          <Box display="flex" alignItems="center">
            {
              !isLoggedIn ? <React.Fragment>
                <Box>
                  <Button onClick={handleRegisterModalOpen} size='small' variant="outlined" color="secondary">
                    Register
                  </Button>
                </Box>
                <Box ml="10px">
                  <Button onClick={handleLoginModalOpen} size='small' variant="contained" color="secondary">
                    Login
                  </Button>
                </Box>
              </React.Fragment>
              : <React.Fragment>
                <Box>
                  <Button onClick={handleLogoutModalOpen} size='small' variant="outlined" color="secondary">
                    Logout
                  </Button>
                </Box>
              </React.Fragment>
            }
            <Box ml="10px">
              <IconButton size='small' color="secondary">
                <ShoppingCartIcon fontSize='small'/>
              </IconButton>
              </Box>
          </Box>
        </Toolbar>
        <BaseLoginModal 
          openModal={openLogin} 
          closeHandle={handleLoginModalClose} 
          registerHandle={handleRegisterModalOpen}
        />
        <BaseRegisterModal
          openModal={openRegister}
          closeHandle={handleRegisterModalClose}
        />
        <BaseLogoutModal
          openModal={openLogout}
          closeHandle={handleLogoutModalClose}
        />
      </AppBar>
  );
}