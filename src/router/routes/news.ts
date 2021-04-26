import { News } from '@components/pages/news/News';

export const newsRoutes = [
  {
    path: '/news',
    component: News,
    exact: true,
    key: 'news'
  }
]