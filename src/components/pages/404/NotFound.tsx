import React, { MouseEvent } from 'react';
import { useHistory } from 'react-router';
import { Typography , Button, Box } from '@material-ui/core';

const NotFound: React.FC = () => {
  const history = useHistory();

  const handleClick = (event: MouseEvent) => {
    history.push('/');
  }

  return (
    <Box 
      flexDirection='column' 
      display='flex' 
      alignItems='center' 
      justifyContent='center'
      height='100%'
    >
      <Typography variant='h1'>
        <Box fontWeight='700' component='span'>404</Box>
      </Typography>
      <Typography>
        Whoops... Page not found!
      </Typography>
      <Box marginTop='10px'>
        <Button onClick={handleClick} variant='contained' color='primary'>
          GO TO HOME PAGE
        </Button>
      </Box>
    </Box>
  )
}

export default NotFound;