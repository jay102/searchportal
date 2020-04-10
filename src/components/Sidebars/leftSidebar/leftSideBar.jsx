import React from 'react';
import './left-sidebar.styles.scss';
import Accordion from '../../accordion/accordion';

//import components
import Date from '../../filterComponents/byDate';
import ByLocation from '../../filterComponents/byLocation';
import ByDocument from '../../filterComponents/byDocument';
import ByPeople from '../../filterComponents/byPeople';

const leftSideBar = () => {
    return (
        <div className="left-sidebar">
            <p className="title">Filters</p>
            <Accordion title="By Date">
             <Date/>
            </Accordion>
            <Accordion title="By Document Type">
            <ByDocument/>
            </Accordion>
            <Accordion title="By Location">
            <ByLocation/>
            </Accordion>
            <Accordion title="By People">
            <ByPeople/>
            </Accordion>
        </div>
    )
}

export default leftSideBar;
