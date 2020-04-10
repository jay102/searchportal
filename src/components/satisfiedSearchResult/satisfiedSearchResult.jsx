import React from 'react';
import './styles.scss';

const satisfiedSearchResult = () => {
    return (
        <div className="satisfied-search-result">
            <p className="title">Are you satisfied with search results?</p>
            <div className="btn-group">
                <button className="no">No</button>
                <button className="yes">Yes</button>
            </div>
            
        </div>
    )
}

export default satisfiedSearchResult;
