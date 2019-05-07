import React, { Component } from 'react';

import PageTitle from '../../components/page-title/page-title';

import './about-me-page.scss';

class AboutMePage extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="main-section">
                <PageTitle>About Me</PageTitle>
            </div>
        );
    }
}

export default AboutMePage;
