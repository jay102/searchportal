import React from 'react';
import Close from '../../assets/icons/close.svg';

const byDocument = () => {
    return (
        <div className="by-document">
            <input className="search-input" type="search" placeholder="(docx, xls, pdf, etc)"/>
            <div className="toggle-group">
            <Tag documentTag="pdf"/>
            <Tag documentTag="web"/>
            <Tag documentTag="docx"/>
            </div>
        </div>
    )
}

export default byDocument;


const Tag = ({documentTag}) => {
    return (
        <div className="tag">
            <p>{documentTag}</p>
            <span><img src={Close} alt="close"/></span>
        </div>
    );
}