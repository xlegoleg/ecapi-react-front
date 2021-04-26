import * as React from 'react';
import { Router } from '@router/router';
import { CssBaseline } from '@material-ui/core';

const App: React.FC = () => {

  return (
    <React.Fragment>
      <CssBaseline/>
        <div className="App">
          <Router/>
        </div>
    </React.Fragment>
  );

}

export default App;
