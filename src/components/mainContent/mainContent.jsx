import React, { useState } from 'react';
import './content.styles.scss';
import {RecommendedTags, EmptyTag } from '../../components/recommendedTags/recommendedTags';
import SearchItem from '../searchItem/searchItem';
import Pagination from 'react-js-pagination';

const MainContent = () => {
    const [activePage, setActivePage ] = useState(1);

    const handlePageChange = page => setActivePage(page);
    return (
        <div className="main-content">
            <p className="total-search-results">About 3000 Results Found</p>
            <p className="recommended-for-you">Recommended For You...</p>
            <div className="tag-group">
            <RecommendedTags text="Grant"/>
            <RecommendedTags text="Health Grant"/>
            <RecommendedTags text="Affordable Care Act"/>
            <EmptyTag number="5"/>
            </div>

            <SearchItem
            head="Grants | Official web site of the U.S. Health Resources"
            body="Find a Health Center; Query Data; View Fact Sheets; 
                  Training & TA Hub. Behavioral Health; Care Teams; Child and 
                  Adolescent Health; Chronic and ... "
            link="www.hrsa.gov/grants/index.htm"
            tag="Link"/>

            <SearchItem
            head="Grants & Funding | NIH"
            body="Find a Health Center; Query Data; View Fact Sheets; 
                  Training & TA Hub. Behavioral Health; Care Teams; Child and 
                  Adolescent Health; Chronic and ...  "
            link=""
            tag="PDF"/>
            <SearchItem
            head="Public health grants to local authorities: 2020 to 2021 "
            body="The public health allocations and monetary conditions for 
                  local authorities to improve health in local populations."
            link="http://www.gov.uk"
            tag="Link"/>
            <SearchItem
            head="Grants & Funding | NIH"
            body="Find a Health Center; Query Data; View Fact Sheets; 
                  Training & TA Hub. Behavioral Health; Care Teams; Child and 
                  Adolescent Health; Chronic and ...  "
            link="www.hrsa.gov/grants/index.htm"
            tag="PDF"/>
            <SearchItem
            head="CDC - Community Health Funding - NCCDPHP: Comm..."
            body="Community Health Funding. Recommend on Facebook 
                  Tweet Share Compartir. This website is archived for 
                  historical purposes and is no longer being ...  "
            link="www.cdc.gov/nccdphp/dch/community-health-funding/index.htm"
            tag="Link"/>
            <SearchItem
            head="CDC - Community Health Funding - NCCDPHP: Comm..."
            body="Community Health Funding. Recommend on Facebook 
                  Tweet Share Compartir. This website is archived for 
                  historical purposes and is no longer being ...  "
            link="www.cdc.gov/nccdphp/dch/community-health-funding/index.htm"
            tag="Link"/>
            <SearchItem
            head="CDC - Community Health Funding - NCCDPHP: Comm..."
            body="Community Health Funding. Recommend on Facebook 
                  Tweet Share Compartir. This website is archived for 
                  historical purposes and is no longer being ...  "
            link="www.cdc.gov/nccdphp/dch/community-health-funding/index.htm"
            tag="Link"/>

            <div className="pagination">
            <Pagination
				activePage={activePage}
				itemsCountPerPage={7}
				totalItemsCount={50}
                pageRangeDisplayed={20}
                hideDisabled
                hideFirstLastPages
                onChange={handlePageChange}
                itemClass="page-item"
                linkClass="page-link"
			/>
            </div>
        </div>
    )
}

export default MainContent;
