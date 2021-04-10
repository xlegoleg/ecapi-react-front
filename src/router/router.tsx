import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { Home } from '@components/pages/home/Home';
import { AdminHome } from '@components/pages/admin-home/AdminHome'
import { newsRoutes } from './routes/news';
import NotFound from '@components/layout/not-found/NotFound';

export const mainRoutes: IRouteItem[] = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/404',
    component: NotFound,
    exact: true
  },
  ...newsRoutes,
]

export const adminRoutes: IRouteItem[] = [
  {
    path: '/admin',
    component: AdminHome,
    exact: true
  },
]

const RouteWithSubRoutes = (route: IRouteItem) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
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

declare interface IRouterComponentProps {
  routes?: IRouteItem[]
}

declare interface IRouteItem  {
  path: string;
  key?: string | number;
  exact?: boolean;
  component: React.FC<IRouterComponentProps>;
  routes?: IRouteItem[];
  [propName: string]: any
}