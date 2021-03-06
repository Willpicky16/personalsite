import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  Avatar,
  Drawer,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
  Typography,
  IconButton,
} from '@material-ui/core';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import NotesIcon from '@material-ui/icons/Notes';
import PhotoSizeSelectActualOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActualOutlined';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import {
  HOME, WORK_EXPERIENCE, PROJECTS, PHOTOS,
} from '../../../constants/urls';

const styles = ((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100,
    backgroundColor: 'grey',
    alignSelf: 'center',
  },
  title: {
    textAlign: 'center',
  },
  subTitle: {
    textAlign: 'center',
    marginBottom: 10,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: 3,
  },
  icons: {
    position: 'absolute',
    bottom: 10,
  },
}));

const AppDrawer = ({ classes }) => (
  <Drawer
    className={classes.drawer}
    variant="permanent"
    classes={{
      paper: classes.drawerPaper,
    }}
    anchor="left"
  >
    <Avatar alt="WP" src="https://firebasestorage.googleapis.com/v0/b/personal-site-b7aac.appspot.com/o/profile.JPG?alt=media&token=33538fcb-95e5-4e6d-ae35-3f0e9be4503a" className={classes.bigAvatar} />
    <Typography className={classes.title} variant="h6">Will Pickering</Typography>
    <Typography className={classes.subTitle} variant="body1">Software Engineer</Typography>
    <Divider />
    <List>
      <ListItem component={Link} to={HOME} button>
        <ListItemIcon><HomeOutlinedIcon /></ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem component={Link} to={WORK_EXPERIENCE} button>
        <ListItemIcon><WorkOutlineIcon /></ListItemIcon>
        <ListItemText primary="Work Experience" />
      </ListItem>
      <ListItem component={Link} to={PROJECTS} button>
        <ListItemIcon><NotesIcon /></ListItemIcon>
        <ListItemText primary="Projects" />
      </ListItem>
      <ListItem component={Link} to={PHOTOS} button>
        <ListItemIcon><PhotoSizeSelectActualOutlinedIcon /></ListItemIcon>
        <ListItemText primary="Photos" />
      </ListItem>
    </List>
    <Grid
      className={classes.icons}
      container
      direction="row"
      justify="center"
    >
      <IconButton color="primary" target="_blank" href="https://www.linkedin.com/in/will-pickering-80266110b/" size="small">
        <LinkedInIcon />
      </IconButton>
      <IconButton color="primary" target="_blank" href="https://twitter.com/BadKompany7" size="small">
        <TwitterIcon />
      </IconButton>
      <IconButton color="primary" target="_blank" href="https://www.instagram.com/liamanthonyphotography/" size="small">
        <InstagramIcon />
      </IconButton>
    </Grid>
  </Drawer>
);

AppDrawer.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(AppDrawer);
