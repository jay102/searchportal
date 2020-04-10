import React from 'react';
import './landing.styles.scss';
import Logo from '../../assets/images/logo.svg';
import TopTrending from '../../assets/images/top_trending.svg';
import TopSearch from '../../assets/images/search.svg';
import { Link } from 'react-router-dom';


//import components
import TopData from '../../components/TopData/topData';
import SearchBox from '../../components/inputBox/inputBox';


const LandingPageView = (props) => {
    const {search,topTrends,handleChange,topSearches } = props;


    return (
        <div className='landing-page'>
            <div className="logo-input">
                <Link to="/"><img className="logo" src={Logo} alt="logo"/></Link>
                <SearchBox handleChange={handleChange} value={search} />                
            </div>

            <div className="top-trending">
            <TopData
                title="Top Trending Searches"
                icon={TopTrending}
                list={topTrends}
                />
            <TopData
                title="Top Most Searches"
                icon={TopSearch}
                list={topSearches}
                />
            </div>
        </div>
    )
}

export default LandingPageView