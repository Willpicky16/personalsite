import React, { Component } from 'react';

import PageTitle from '../../components/page-title/page-title';

import './work-experience-page.scss';

class WorkExperiencePage extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="main-section">
                <PageTitle>Work Experience</PageTitle>
            </div>
        );
    }
}

export default WorkExperiencePage;
