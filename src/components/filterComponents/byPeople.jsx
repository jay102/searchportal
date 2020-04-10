import React from 'react';
import './styles.scss';

const ByPeople = () => {
    return (
        <div className="by-people">
            <input className="search-input" type="text" value="" placeholder="Search People"/>

            <div className="form-check">
            <label className="form-check-label"><input type="checkbox" className="form-check-input" value="" checked/>Conrad Aiken</label>
            </div>
            <div className="form-check">
            <label className="form-check-label"><input type="checkbox" className="form-check-input" value="" checked/>James Bowie</label>
            </div>
            <div className="form-check">
            <label className="form-check-label"><input type="checkbox" className="form-check-input" value="" checked/>Erskine Caldwell</label>
            </div>
            <div className="form-check">
            <label className="form-check-label"><input type="checkbox" className="form-check-input" value=""/>James E. Carter</label>
            </div>
            <div className="form-check">
            <label className="form-check-label"><input type="checkbox" className="form-check-input" value=""/>Ray Charles</label>
            </div>
            <div className="form-check">
            <label className="form-check-label"><input type="checkbox" className="form-check-input" value=""/>Ty Cobb</label>
            </div>
        </div>
    )
}

export default ByPeople;
