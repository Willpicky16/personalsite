import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';

import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import AppHeader from './components/app-header';
import AppDrawer from './components/app-drawer';
import AppRouter from './components/app-router';

const styles = (() => ({
  root: {
    display: 'flex',
  },
}));

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
    primary: {
      main: '#42a5f5',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

const App = ({ classes }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <div className={classes.root}>
        <AppHeader />
        <AppDrawer />
        <AppRouter />
      </div>
    </Router>
  </ThemeProvider>
);

App.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(App);
