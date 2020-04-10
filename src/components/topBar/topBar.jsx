import React from 'react';
import './topbar.styles.scss';
import Logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

//import components
import SearchBox from '../inputBox/inputBox';

const topBar = () => {
    return (
        <div>
        <div className="topbar">
        <Link to="/"><img src={Logo} alt="logo"/> </Link>
           <SearchBox className="results" placeholder="Health Grant"/>
           <div className="letter-box">
               <span className="smallest">A</span>
               <span className="smaller">A</span>
               <span className="small">A</span>
           </div>
        </div>
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
