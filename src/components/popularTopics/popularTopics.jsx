import React from 'react';
import './populartopics.styles.scss';
import HowitWorksLogo from '../../assets/images/how-it-works.svg';
import TrendingLogo from '../../assets/images/trending.svg';
import ContributeLogo from '../../assets/images/contribute.svg';

const popularTopics = () =>{
    return (
        <div className="popular-topics">
            <h4 className="title">Popular Topics</h4>
            <Item text="How it Works" logo={HowitWorksLogo}/>
            <Item text="Trending Searches" logo={TrendingLogo}/>
            <Item text="Contribute" logo={ContributeLogo}/>
        </div>
    )
}

export default popularTopics;


const Item = ({logo,text}) => {
    return (
        <div className="popular-topics-item">
            <img alt="logo" src={logo}/>
             <p>{text}</p>
        </div>
    );
}