import React, { Component } from 'react';

import PageTitle from '../../components/page-title/page-title';

import './photos-page.scss';

class PhotosPage extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="main-section">
                <PageTitle>Photos</PageTitle>
            </div>
        );
    }
}

export default PhotosPage;
