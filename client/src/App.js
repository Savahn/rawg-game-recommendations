import React, { useEffect } from 'react';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import MainScreen from './components/MainScreen';
import routes from './routes';

import { getGames } from './actions/games';

const AppRouter = () => {
  return (
    <MainScreen>
      <Route exact path='/'>
        <Redirect to='/dashboard' />
      </Route>
      {routes.map((route, i) => {
        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={() => <route.component routes={route.routes} />}
          />
        );
      })}
    </MainScreen>
  );
};

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);
  return (
    <Router>
      <AppRouter />
    </Router>
  );
};

export default App;
