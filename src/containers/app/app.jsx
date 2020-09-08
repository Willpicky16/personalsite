import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import AppHeader from './components/app-header';
import AppDrawer from './components/app-drawer';
import AppRouter from './components/app-router';

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

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <AppHeader />
      <AppDrawer />
      <AppRouter />
    </Router>
  </ThemeProvider>
);

export default App;
