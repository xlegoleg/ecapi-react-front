import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { IRouteItem } from '@interfaces/router/router'
import NotFound from '@components/layout/not-found/NotFound';
import LayoutMain from '@components/layout/layout-main/LayoutMain';
import LayoutAdmin from '@components/layout/layout-admin/LayoutAdmin';

const RouteWithSubRoutes = (route: IRouteItem) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      key={route.key}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
}

export const RenderRoutes = (routes: IRouteItem[]) =>  {
  return (
    <Switch>
      {routes.map((route: IRouteItem, i: number) => {
        return <RouteWithSubRoutes {...route} />;
      })}
      <Route exact component={NotFound}/>
    </Switch>
  );
}

export const Router = () => {
  return (
  <BrowserRouter>
    <Switch>
      <Route exact path="/admin/:path?" component={LayoutAdmin} />
      <Route exact component={LayoutMain} />
    </Switch>
  </BrowserRouter>
  )
}