import Dashboard from '../screens/Dashboard';
import RawgGames from '../screens/RawgGames';

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
];

export default routes;
