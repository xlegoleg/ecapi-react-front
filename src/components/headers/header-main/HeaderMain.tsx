import React, { useState } from 'react';
import { Toolbar, Button, Box, IconButton, Typography, AppBar } from '@material-ui/core';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { HeaderMainNav } from '@components/navs/header-main-nav/HeaderMainNav';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    toolbar: {
      justifyContent: 'space-between'
    }
  });
});


export const HeaderMain: React.FC = (props) => {
  const [title] = useState('Beer-to-peer');
  const classes = useStyles();

  return (
    <Box flexGrow="1">
      <AppBar position="static" color="primary">
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
            <Box><Button size='small' variant="outlined" color="secondary">Register</Button></Box>
            <Box ml="10px"><Button size='small' variant="contained" color="secondary">Login</Button></Box>
            <Box ml="10px">
              <IconButton size='small' color="secondary">
                <ShoppingCartIcon fontSize='small'/>
              </IconButton>
              </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}