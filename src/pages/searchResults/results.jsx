import React from 'react';
import './results.styles.scss';

import TopBar from '../../components/topBar/topBar';
import LeftSideBar from '../../components/Sidebars/leftSidebar/leftSideBar';
import RightSideBar from '../../components/Sidebars/rightSideBar/rightSideBar';
import MainContent from '../../components/mainContent/mainContent';

const results = () => {
    return (
        <div className="results-page">
           <TopBar/>
           <div className="content">
            <LeftSideBar/>
            <MainContent/>
            <RightSideBar/>
           </div>
        </div>
    )
}

export default results;
