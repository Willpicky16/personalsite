import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { withStyles } from '@material-ui/core/styles';

import {
  IconButton, Dialog, AppBar, Toolbar, Typography, GridList, GridListTile, GridListTileBar,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';

import getPhotoDataAction from '../../actions/get-photo-data';

import Spinner from '../../components/spinner/spinner';

import STORE_KEYS from '../../constants/store-keys';

const {
  PHOTO_DATA: { IS_PHOTO_DATA_LOADING, PHOTO_DATA },
} = STORE_KEYS;

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 'auto',
    height: 'auto',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  imageSize: {
    width: '100%',
    height: '100%',
  },
});

class PhotosPage extends Component {
  constructor() {
    super();
    this.state = {
      selectedTile: null,
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    const { getPhotoData } = this.props;

    getPhotoData();
  }

  handleClickOpen(selectedTile) {
    this.setState({
      selectedTile,
    });
  }

  handleClose() {
    this.setState({
      selectedTile: null,
    });
  }

  render() {
    const { classes, isPhotoDataLoading, photoData } = this.props;
    const { selectedTile } = this.state;

    if (isPhotoDataLoading) return <Spinner />;

    if (photoData.length === 0) {
      return (
        <div>
          <Typography>
            Sorry no photos
          </Typography>
        </div>
      );
    }

    return (
      <div>
        <GridList cols={3}>
          {photoData.map((tile) => (
            <GridListTile key={tile.id}>
              <img src={tile.src} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                actionIcon={(
                  <IconButton
                    aria-label={`info about ${tile.title}`}
                    className={classes.icon}
                    value={tile.id}
                    onClick={() => this.handleClickOpen(tile)}
                  >
                    <InfoIcon />
                  </IconButton>
                )}
              />
            </GridListTile>
          ))}
        </GridList>
        <Dialog
          fullScreen
          open={selectedTile !== null}
          onClose={this.handleClose}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={this.handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                {selectedTile && selectedTile.length !== 0 ? selectedTile.title : ''}
              </Typography>
            </Toolbar>
          </AppBar>
          {selectedTile && (
            <img className={classes.imageSize} src={selectedTile.src} alt={selectedTile.title} />
          )}
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isPhotoDataLoading: state.photoData.get(IS_PHOTO_DATA_LOADING),
  photoData: state.photoData.get(PHOTO_DATA),
});

const mapDispatchToProps = {
  getPhotoData: getPhotoDataAction,
};

PhotosPage.propTypes = {
  classes: PropTypes.shape().isRequired,
  isPhotoDataLoading: PropTypes.bool,
  photoData: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  getPhotoData: PropTypes.func.isRequired,
};

PhotosPage.defaultProps = {
  isPhotoDataLoading: false,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
)(PhotosPage);
