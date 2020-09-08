import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Switch,
} from 'react-router-dom';

import { withStyles } from '@material-ui/core';

import {
  APP_ROUTES,
} from '../../../constants/routes';

const styles = (() => ({
  content: {
    width: `calc(100% - ${240}px)`,
    marginLeft: 250,
    marginTop: 70,
  },
}));

const AppRouter = ({ classes }) => (
  <div className={classes.content}>
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
);

AppRouter.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(AppRouter);
