import React from 'react';
import './topbar.styles.scss';
import Logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import {BrowserView,MobileView} from "react-device-detect";

//import icons
import FilterIcon from '../../assets/icons/filter-small.svg';
import LogoSmallIcon from '../../assets/icons/logo-small.svg';
import FontSizechangerIcon from '../../assets/icons/textsize-changer-small.svg';

//import components
import SearchBox from '../inputBox/inputBox';

const topBar = () => {
    return (
        <div>
            <BrowserView>
            <div className="topbar">
            <Link to="/"><img src={Logo} alt="logo"/> </Link>
            <SearchBox className="results" placeholder="Health Grant"/>
            <div className="letter-box">
               <span className="smallest">A</span>
               <span className="smaller">A</span>
               <span className="small">A</span>
           </div>
           </div>
            </BrowserView>

            <MobileView>
            <div className="mobile-topbar-ui">
            <div className="inner">
            <img src={FilterIcon} alt="filter"/>
            <img src={LogoSmallIcon} alt="logo-small"/>
             <img src={FontSizechangerIcon} alt="fontsize changer"/>
            </div>   
            <SearchBox mobile className="results" placeholder="Health Grant"/> 
            </div> 
            </MobileView>

        <div className="nav-cover">
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link active" href="/all">All</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/web">Web</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/images">Images</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/social">Social</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/documents">Documents</a>
            </li>
            </ul>
        </div>
        </div>

    )
}

export default topBar;
