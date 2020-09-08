import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = () => ({
  root: {
    display: 'flex',
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Spinner = ({ classes }) => (
  <div className={classes.root}>
    <CircularProgress />
  </div>
);

Spinner.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(Spinner);
