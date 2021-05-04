import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { IWrapperProps } from '@interfaces/base/wrapperProps';

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: '100%'
  }
});

export const BaseContainer: React.FC<IWrapperProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="lg">{children}</Container>
  );
}