import * as React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import LayoutMain from '@components/layout/layout-main/LayoutMain';
import LayoutAdmin from '@components/layout/layout-admin/LayoutAdmin';

const App: React.FC = () => {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/admin/:path?" component={LayoutAdmin} />
          <Route exact component={LayoutMain} />
        </Switch>
      </Router>
    </div>
  );

}

export default App;
