import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import {
  AppBar, Toolbar, Typography, withStyles,
} from '@material-ui/core';

import getPageTitle from '../../../helpers/get-page-title';

const styles = (() => ({
  appBar: {
    width: `calc(100% - ${240}px)`,
    marginLeft: 240,
  },
}));

const AppHeader = ({ classes }) => {
  const location = useLocation();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap>{getPageTitle(location.pathname)}</Typography>
      </Toolbar>
    </AppBar>
  );
};

AppHeader.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(AppHeader);
