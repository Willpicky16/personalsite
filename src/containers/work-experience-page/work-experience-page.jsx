import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import getWorkExperienceDataAction from '../../actions/get-work-experience-data';

import PageTitle from '../../components/page-title/page-title';
import InfoCard from '../../components/info-card/info-card';
import Spinner from '../../components/spinner/spinner';

import STORE_KEYS from '../../constants/store-keys';

const {
  WORK_EXPERIENCE_DATA: { IS_WORK_EXPERIENCE_DATA_LOADING, WORK_EXPERIENCE_DATA },
} = STORE_KEYS;

class WorkExperiencePage extends Component {
  componentDidMount() {
    const { getWorkExperienceData } = this.props;

    getWorkExperienceData();
  }

  render() {
    const { isWorkExperienceDataLoading, workExperienceData } = this.props;

    if (isWorkExperienceDataLoading) return <Spinner />;

    return (
      <div>
        <PageTitle>Work Experience</PageTitle>
        <div>
          {
            workExperienceData.map((workExperience) => (
              <InfoCard
                title={workExperience.title}
                subheader={`${workExperience.timeframe} - ${workExperience.workLocation}`}
                button
              />
            ))
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isWorkExperienceDataLoading: state.workExperienceData.get(IS_WORK_EXPERIENCE_DATA_LOADING),
  workExperienceData: state.workExperienceData.get(WORK_EXPERIENCE_DATA),
});

const mapDispatchToProps = {
  getWorkExperienceData: getWorkExperienceDataAction,
};

WorkExperiencePage.propTypes = {
  isWorkExperienceDataLoading: PropTypes.bool,
  workExperienceData: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  getWorkExperienceData: PropTypes.func.isRequired,
};

WorkExperiencePage.defaultProps = {
  isWorkExperienceDataLoading: false,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(WorkExperiencePage);
