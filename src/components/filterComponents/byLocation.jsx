import React from 'react';
import './styles.scss';

const ByLocation = () => {
    return (
        <div className="by-location">
            <input className="search-input" type="search" value="Ba"/>

            <div className="form-check">
            <label className="form-check-label"><input type="checkbox" className="form-check-input" value="" checked/>Bacon County</label>
            </div>
            <div className="form-check">
            <label className="form-check-label"><input type="checkbox" value="" className="form-check-input" checked/>Baker County</label>
            </div>
            <div className="form-check">
            <label className="form-check-label"><input type="checkbox" value="" className="form-check-input" checked/>Baldwin County</label>
            </div>
            <div className="form-check">
            <label className="form-check-label"><input type="checkbox" value="" className="form-check-input"/>Banks County</label>
            </div>
            <div className="form-check">
            <label className="form-check-label"><input type="checkbox" value="" className="form-check-input"/>Barrow County</label>
            </div>
            <div className="form-check">
            <label className="form-check-label"><input type="checkbox" value="" className="form-check-input"/>Bartow County</label>
            </div>
        </div>
    )
}

export default ByLocation;
