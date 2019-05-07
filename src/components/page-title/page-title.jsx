import React from 'react';
import PropTypes from 'prop-types';

import './page-title.scss';

const PageTitle = ({ children }) => (
  <div className="page-title">
    {children}
  </div>
);

PageTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default PageTitle;
