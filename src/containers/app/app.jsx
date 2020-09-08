import React from 'react';

import { withStyles } from '@material-ui/core';

import AppHeader from './components/app-header';
import AppDrawer from './components/app-drawer';
import AppRouter from './components/app-router';

const styles = (() => ({
  root: {
    display: 'flex',
  },
}));

function App() {
  return (
    <div>
      <AppHeader />
      <AppDrawer />
      <AppRouter />
    </div>
  );
}

export default withStyles(styles)(App);
