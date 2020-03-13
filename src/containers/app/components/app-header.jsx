import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {
  HOME, WORK_EXPERIENCE, PROJECTS, PHOTOS,
} from '../../../constants/urls';

// import logo from './logo.png';

import './app-header.scss';

const AppHeader = () => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit">Will Pickering</Typography>
        <Button component={Link} to={HOME} color="inherit">Home</Button>
        <Button component={Link} to={WORK_EXPERIENCE} color="inherit">Work Experience</Button>
        <Button component={Link} to={PROJECTS} color="inherit">Projects</Button>
        <Button component={Link} to={PHOTOS} color="inherit">Photos</Button>
      </Toolbar>
    </AppBar>
  </div>
);

export default AppHeader;
