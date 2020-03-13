import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

import './home-page.scss';

const styles = {
  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100,
    backgroundColor: 'grey',
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
      <div className="home-page">
        <Avatar alt="WP" src="https://firebasestorage.googleapis.com/v0/b/personal-site-b7aac.appspot.com/o/profile.JPG?alt=media&token=33538fcb-95e5-4e6d-ae35-3f0e9be4503a" className={classes.bigAvatar} />
        <Typography variant="h2">Will Pickering</Typography>
        <Typography variant="body1">
          Hello my name is Will and i am a Software Engineer currently working for Cloudit.
          I am AWS certified in the developer associate.
        </Typography>
      </div>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(HomePage);
