import { newsRoutes } from '../routes/news';
import { Home } from '@components/pages/home/Home';
import { AdminHome } from '@components/pages/admin-home/AdminHome'
import { IRouteItem } from '@interfaces/router/router';

export const mainRoutes: IRouteItem[] = [
  {
    path: '/',
    component: Home,
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