import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

import React from 'react';

import './info-card.scss';

const styles = {
  root: {
    width: 350,
    height: 250,
    display: 'inline-block',
  },
  media: {
    height: 140,
  },
};

const InfoCard = ({
  classes, title, subheader, children, button,
}) => (
  <div className="main-section">
    <Card className={classes.root}>
      <CardHeader
        title={title}
        subheader={subheader}
      />
      {/* <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        /> */}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {children}
        </Typography>
      </CardContent>
      {
        button ? (
          <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        ) : null
      }
    </Card>
  </div>
);

InfoCard.propTypes = {
  classes: PropTypes.shape().isRequired,
  title: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  children: PropTypes.string.isRequired,
  button: PropTypes.bool,
};

InfoCard.defaultProps = {
  button: false,
  subheader: null,
};

export default withStyles(styles)(InfoCard);
