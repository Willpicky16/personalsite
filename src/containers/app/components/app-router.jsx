import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import {
  APP_ROUTES,
} from '../../../constants/routes';

import './app-router.scss';

const AppRouter = () => (
  <div className="app">
    <div className="app-content">
      <Switch>
        {APP_ROUTES.map((route) => (
          <Route
            key={route.url || 'nomatch'}
            path={route.url}
            component={route.component}
            exact
          />
        ))}
      </Switch>
    </div>
  </div>
);

export default AppRouter;
