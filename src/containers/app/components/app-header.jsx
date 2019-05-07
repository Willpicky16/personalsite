import React from 'react';

import logo from './logo.png';

import './app-header.scss';

const AppHeader = ({ logout }) => (
  <div className="app-header">
    <div className="brand">
      <img src={logo} className="app-logo" alt="logo" />
    </div>
  </div>
);

export default AppHeader;
