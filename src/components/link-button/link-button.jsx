import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import React from 'react';

import './link-button.scss';

const LinkButton = ({ children, to }) => (
  <Link className="link-button" to={to}>
    <div className="link-text">
      {children}
    </div>
  </Link>
);

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default LinkButton;
