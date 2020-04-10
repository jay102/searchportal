import React from 'react';
import './topdata.styles.scss';
import { Link } from 'react-router-dom';

const topData = ({title,list,icon}) => {
    return (
        <div className="top-data">
        <div className="item">
        <p className="title">{title} <span><img src={icon} alt={title}/></span></p>
        <ul className="list"> 
                {list?
                list.map(item => <Link key={item.key} to="/search"><li>{item.value}</li></Link>)
                : null}
        </ul>
        </div>
        </div>

    )
}

export default topData;
