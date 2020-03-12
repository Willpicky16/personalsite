import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';
import PageTitle from '../../components/page-title/page-title';

import './about-me-page.scss';

const styles = {
  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
};

class AboutMePage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="main-section">
        <PageTitle>About Me</PageTitle>
        <Avatar alt="Will Pickering" src="" className={classes.bigAvatar} />
        <h1>Will Pickering</h1>
      </div>
    );
  }
}

export default withStyles(styles)(AboutMePage);
