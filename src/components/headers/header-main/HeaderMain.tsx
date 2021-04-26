import React, { useState } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography'
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';


export const HeaderMain: React.FC = (props) => {
  const [title] = useState('Custom-shop');

  return (
    <Box flexGrow="1">
      <AppBar position="static" color="primary">
        <Toolbar>
          {/* TODO set title from CMS */}
          <Box flexGrow="1" display="flex" alignItems="center">
            <Typography variant="h5">{title}</Typography>
            <LocalDrinkIcon/>
          </Box>
          <Box display="flex" alignItems="center">
            <Box><Button variant="outlined" color="secondary">Register</Button></Box>
            <Box ml="10px"><Button variant="contained" color="secondary">Login</Button></Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}