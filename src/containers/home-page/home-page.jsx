import React from 'react';

import LinkButton from '../../components/link-button/link-button';

import { WORK_EXPERIENCE, ABOUT_ME, PROJECTS, PHOTOS } from '../../constants/urls';

import './home-page.scss';

const HomePage = () => (
  <div className="home-page">
    <div className="link-wrapper">
      <LinkButton to={ABOUT_ME}>About Me</LinkButton>
    </div>
    <div className="link-wrapper">
      <LinkButton to={WORK_EXPERIENCE}>Work Experience</LinkButton>
    </div>
    <div className="link-wrapper">
      <LinkButton to={PROJECTS}>Projects</LinkButton>
    </div>
    <div className="link-wrapper">
      <LinkButton to={PHOTOS}>Photos</LinkButton>
    </div>
  </div>
);

export default HomePage;
