import React, { Component } from 'react';

import PageTitle from '../../components/page-title/page-title';
import InfoCard from '../../components/info-card/info-card';

class WorkExperiencePage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <PageTitle>Work Experience</PageTitle>
        <div>
          <InfoCard title="Cloudit - Software Engineer" subheader="January 2019 to Present - Whaley Bridge, Derbyshire" button>TODO</InfoCard>
          <InfoCard title="Your Fitness Journey - Software Engineer" subheader="July 2018 to January 2019 - Manchester, UK" button>TODO</InfoCard>
          <InfoCard title="Peak - Software Engineer" subheader="June 2017 to June 2018 - Manchester, UK" button>TODO</InfoCard>
          <InfoCard title="Northcoders - Trainee Software Developer" subheader="Febuary 2017 to May 2017 - Manchester, UK" button>TODO</InfoCard>
          <InfoCard title="Distribeat - Software Developer" subheader="June 2015 to June 2017 - Manchester, UK" button>TODO</InfoCard>
          <InfoCard title="Cloudit - Junior Software Developer" subheader="September 2013 to September 2016 - Manchester, UK" button>TODO</InfoCard>
        </div>
      </div>
    );
  }
}

export default WorkExperiencePage;
