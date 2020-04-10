import React from 'react';
import './inputbox.styles.scss';
import Mic from '../../assets/icons/mic.svg';

const inputBox = ({handleChange, className,...otherProps}) => {
    return (
        <div className="form-group has-search">
        <input className={`search-box form-control ${className}`} type="text" {...otherProps} onChange={handleChange}/>
        <span className="form-control-feedback"><img src={Mic} alt="mic"/><i className="fa fa-search fa-2x icon"/></span>
        </div>
    )
}

export default inputBox;
