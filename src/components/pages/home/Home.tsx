import React from 'react';
import { BaseContainer } from '@components/base/base-container/BaseContainer';
import { Box } from '@material-ui/core';
import { HomePromo } from './components/HomePromo';
import { HomeNews } from './components/HomeNews';

export const Home: React.FC = (props) => {
  return (
    <Box>
      <HomePromo/>
      <BaseContainer>
        <HomeNews/>
      </BaseContainer>
    </Box>
  )
}