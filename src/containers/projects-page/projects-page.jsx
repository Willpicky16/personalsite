import React, { Component } from 'react';

import PageTitle from '../../components/page-title/page-title';

import './projects-page.scss';

class ProjectsPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="main-section">
        <PageTitle>Projects</PageTitle>
      </div>
    );
  }
}

export default ProjectsPage;
