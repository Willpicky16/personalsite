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

const styles = ((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const AppRouter = ({ classes }) => (
  <main className={classes.content}>
    <div className={classes.toolbar} />
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
  </main>
);

AppRouter.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(AppRouter);
