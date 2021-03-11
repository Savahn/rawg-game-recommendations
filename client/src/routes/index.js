import Dashboard from '../screens/Dashboard';
import RawgGames from '../screens/RawgGames';
import BookInfo from '../screens/BookInfo';

const routes = [
  {
    id: 'dashboard',
    path: '/dashboard',
    exact: true,
    component: Dashboard,
    disabled: false,
  },
  {
    id: 'rawg',
    path: '/database',
    exact: true,
    component: RawgGames,
    disabled: false,
  },
  {
    id: 'book-info',
    path: ['/FullStackReact', '/HeadFirstJavaScript', '/LearnReactHooks'],
    exact: true,
    component: BookInfo,
    disabled: false,
  },
];

export default routes;
