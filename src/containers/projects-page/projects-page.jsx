import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import PageTitle from '../../components/page-title/page-title';
import InfoCard from '../../components/info-card/info-card';
import Spinner from '../../components/spinner/spinner';

import getProjectDataAction from '../../actions/get-project-data';

import STORE_KEYS from '../../constants/store-keys';

const {
  PROJECT_DATA: { IS_PROJECT_DATA_LOADING, PROJECT_DATA },
} = STORE_KEYS;

class ProjectsPage extends Component {
  componentDidMount() {
    const { getProjectData } = this.props;

    getProjectData();
  }

  render() {
    const { isProjectDataLoading, projectData } = this.props;

    if (isProjectDataLoading) return <Spinner />;

    return (
      <div>
        <PageTitle>Projects</PageTitle>
        <div>
          {
            projectData
              .map((project) => (
                <InfoCard key={project.title} title={project.title}>
                  {project.description}
                </InfoCard>
              ))
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isProjectDataLoading: state.projectData.get(IS_PROJECT_DATA_LOADING),
  projectData: state.projectData.get(PROJECT_DATA),
});

const mapDispatchToProps = {
  getProjectData: getProjectDataAction,
};

ProjectsPage.propTypes = {
  isProjectDataLoading: PropTypes.bool,
  projectData: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  getProjectData: PropTypes.func.isRequired,
};

ProjectsPage.defaultProps = {
  isProjectDataLoading: false,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(ProjectsPage);
