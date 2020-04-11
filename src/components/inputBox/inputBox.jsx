import React from 'react';
import './inputbox.styles.scss';
import Mic from '../../assets/icons/mic.svg';

const inputBox = ({mobile,handleChange, className,...otherProps}) => {

    if(mobile){
        return (
         
            <div className="input-group">
            <input type="search" className={`search-box form-control ${className}`} {...otherProps} onChange={handleChange}/>
            <div className="input-group-append">
                <button className="btn btn-secondary searchbtn" type="button">
                    <i className="fa fa-search"></i>
                </button>
            </div>
            </div>
        );
    }

    return (
        <div className="form-group has-search">
        <input className={`search-box form-control ${className}`} type="text" {...otherProps} onChange={handleChange}/>
        <span className="form-control-feedback"><img src={Mic} alt="mic"/><i className="fa fa-search fa-2x icon"/></span>
        </div>
    )
}

export default inputBox;



{/* <div className="input-group has-search">
<input type="search" className={`search-box form-control ${className}`} {...otherProps} onChange={handleChange}/>
<span className="form-control-feedback">
<div className="input-group-append">
    <button className="btn btn-secondary searchbtn" type="button">
        <i className="fa fa-search"></i>
    </button>
</div>
</span>

</div> */}