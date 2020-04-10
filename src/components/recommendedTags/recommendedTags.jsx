import React from 'react';
import './tags.styles.scss';

const RecommendedTags = ({text}) => {
    return (
        <div className="tag-body">
            <p className="text">{text}</p>
        </div>
    )
}

const EmptyTag = ({number}) => {
    return (
        <div className="empty-tag">
            <p className="text">+{number}</p>
        </div>
    );
}
export {RecommendedTags,EmptyTag};
