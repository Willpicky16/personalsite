import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import PageTitle from '../../components/page-title/page-title';

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

const tileData = [
  {
    category: 'Night Photos',
    photos: [
      {
        title: 'test',
        img: 'https://firebasestorage.googleapis.com/v0/b/personal-site-b7aac.appspot.com/o/photos%2FIMG_0947.jpg?alt=media&token=8b049490-ac53-4ef5-9961-39b9d54e3c5d',
      },
      {
        title: 'test 2',
        img: 'https://firebasestorage.googleapis.com/v0/b/personal-site-b7aac.appspot.com/o/photos%2FIMG_0947.jpg?alt=media&token=8b049490-ac53-4ef5-9961-39b9d54e3c5d',
      },
      {
        title: 'test 3',
        img: 'https://firebasestorage.googleapis.com/v0/b/personal-site-b7aac.appspot.com/o/photos%2FIMG_0947.jpg?alt=media&token=8b049490-ac53-4ef5-9961-39b9d54e3c5d',
      },
      {
        title: 'test 4',
        img: 'https://firebasestorage.googleapis.com/v0/b/personal-site-b7aac.appspot.com/o/photos%2FIMG_0947.jpg?alt=media&token=8b049490-ac53-4ef5-9961-39b9d54e3c5d',
      },
    ],
  },
  {
    category: 'Dog Photos',
    photos: [
      {
        title: 'test',
        img: 'https://firebasestorage.googleapis.com/v0/b/personal-site-b7aac.appspot.com/o/photos%2FIMG_0947.jpg?alt=media&token=8b049490-ac53-4ef5-9961-39b9d54e3c5d',
      },
      {
        title: 'test 2',
        img: 'https://firebasestorage.googleapis.com/v0/b/personal-site-b7aac.appspot.com/o/photos%2FIMG_0947.jpg?alt=media&token=8b049490-ac53-4ef5-9961-39b9d54e3c5d',
      },
      {
        title: 'test 3',
        img: 'https://firebasestorage.googleapis.com/v0/b/personal-site-b7aac.appspot.com/o/photos%2FIMG_0947.jpg?alt=media&token=8b049490-ac53-4ef5-9961-39b9d54e3c5d',
      },
      {
        title: 'test 4',
        img: 'https://firebasestorage.googleapis.com/v0/b/personal-site-b7aac.appspot.com/o/photos%2FIMG_0947.jpg?alt=media&token=8b049490-ac53-4ef5-9961-39b9d54e3c5d',
      },
    ],
  },
];

class PhotosPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        {
          tileData.map((data) => (
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

PhotosPage.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(PhotosPage);
