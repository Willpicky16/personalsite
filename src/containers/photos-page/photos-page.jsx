import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { withStyles } from '@material-ui/core/styles';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import getPhotoDataAction from '../../actions/get-photo-data';

import PageTitle from '../../components/page-title/page-title';
import Spinner from '../../components/spinner/spinner';

import STORE_KEYS from '../../constants/store-keys';

const {
  PHOTO_DATA: { IS_PHOTO_DATA_LOADING, PHOTO_DATA },
} = STORE_KEYS;

const styles = () => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

class PhotosPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const { getPhotoData } = this.props;

    getPhotoData();
  }

  render() {
    const { classes, isPhotoDataLoading, photoData } = this.props;

    if (isPhotoDataLoading) return <Spinner />;

    return (
      <div>
        {
          photoData.map((data) => (
            <>
              <PageTitle>{data.category}</PageTitle>
              <div className={classes.root}>
                <GridList className={classes.gridList} cols={2.5}>
                  {data.photos.map((tile) => (
                    <GridListTile key={tile.img}>
                      <img src={tile.img} alt={tile.title} />
                      <GridListTileBar
                        title={tile.title}
                        classes={{
                          root: classes.titleBar,
                          title: classes.title,
                        }}
                      />
                    </GridListTile>
                  ))}
                </GridList>
              </div>
            </>
          ))
        }
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
