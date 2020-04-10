import React from 'react';
import './search-item.styles.scss';

const searchItem = ({head, body, link, tag}) => {
    return (
        <div className="search-item">
            <div>
            <a href={link} className="search-result-header">{head}</a>
            <span><Tag tag={tag}/></span>
            </div>
            
            <p className="search-result">{body}</p>
            <a href={link} className="web-link">{link}</a>
        </div>
    )
}

export default searchItem;

const Tag = ({tag}) => {
    return <div className="tag">{tag}</div>
}