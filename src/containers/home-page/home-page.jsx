import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Typography, withStyles } from '@material-ui/core';

const styles = {
  info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

  },
  image: {
    width: 100,
    height: 100,
  },
};

class HomePage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.info}>
        <Typography variant="h3">Hello!</Typography>
        <Typography variant="body1">
          My name is Will Pickering,
          and i am a Full-Stack Software Engineer currently working for Cloudit.
          I am also AWS certified developer (associate).
        </Typography>
        <img className={classes.image} src="https://firebasestorage.googleapis.com/v0/b/personal-site-b7aac.appspot.com/o/aws-certified-developer-associate.png?alt=media&token=6b9bfd1d-66c2-4d39-a44e-dcf88b4ff72b" alt="AWS" />
      </div>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(HomePage);
