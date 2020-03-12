import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';

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
        <Avatar alt="WP" src="src/assests/profile.jpg" className={classes.bigAvatar} />
        <h1>Will Pickering</h1>
        <p>Hello my name is Will and i am a Software Engineer currently working for Cloudit.</p>
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
