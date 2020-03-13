import React, { Component } from 'react';

import PageTitle from '../../components/page-title/page-title';
import InfoCard from '../../components/info-card/info-card';

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
        <div>
          <InfoCard title="Peazi" button>Peazi is online ordering system for pubs and bars.</InfoCard>
          <InfoCard title="Fitr" button>Fitr was an mobile app where users could find personal trainer sessions.</InfoCard>
          <InfoCard title="Distribeat" button>Distribeat was an online music distribution service, which allowed music artists to get there music online.</InfoCard>
        </div>
      </div>
    );
  }
}

export default ProjectsPage;
