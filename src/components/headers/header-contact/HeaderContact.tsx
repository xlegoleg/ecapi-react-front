import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Box, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    headerContact: {
      backgroundColor: theme?.palette?.secondary?.main,
      color: theme?.palette?.common?.black,
      minHeight: '22px'
    },
    link: {
      color: theme?.palette?.common?.black
    }
  })
});

export const HeaderContact: React.FC = (props) => {
  const classes = useStyles();
  const [phone] = useState('+79998887766');
  const [mail] = useState('beertopeer@example.com')

  return (
    <Toolbar className={classes.headerContact}>
      <Box marginLeft='auto'>
        <Typography variant='caption'>
          <a className={classes.link} href={`mailto:${mail}`}>{mail}</a>
        </Typography>
        <Typography style={{marginLeft: '10px'}} variant='caption'>
          <a className={classes.link} href={`tel:${phone}`}>{phone}</a>
        </Typography>
      </Box>
    </Toolbar>
  );
}
