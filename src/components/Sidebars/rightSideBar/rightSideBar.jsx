import React from 'react';
import './right-sidebar.styles.scss';

//import components
import PopularTopics from '../../popularTopics/popularTopics';
import SatisfiedSearchResult from '../../satisfiedSearchResult/satisfiedSearchResult';
import SearchEnterpriseData from '../../searchEnterpriseData/searchEnterpriseData';

const rightSideBar = () => {
    return (
        <div className="right-sidebar">
            <PopularTopics/>
            <SatisfiedSearchResult/>
            <SearchEnterpriseData/>
        </div>
    )
}

export default rightSideBar;
