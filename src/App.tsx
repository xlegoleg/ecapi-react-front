import * as React from 'react';
import { Router } from '@router/router';
import { CssBaseline } from '@material-ui/core';

const App: React.FC = () => {

  return (
    <React.Fragment>
      <CssBaseline/>
        <Router/>
    </React.Fragment>
  );

}

export default App;
