import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => {
  console.log(theme);
  return createStyles({
    footer: {
      position: 'fixed',
      bottom: '0',
      backgroundColor: theme?.palette?.primary?.main,
      width: '100%',
      padding: '10px 0px',
      color: theme?.palette?.text?.primary
    },
    footerWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme?.palette?.common?.white
    }
  });
});

export const FooterMain: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.footerWrapper}>
        <Typography variant="caption">
          &copy; {new Date().getFullYear()} xlegoleg
        </Typography>
      </div>
    </footer>
  )
}