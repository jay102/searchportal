import React from 'react';
import './accordion.styles.scss';

const accordion = ({children,title,className}) => {
    return (
        <div className={`accordion ${className}`} id="accordion">
        <div className="card">
        <div className="card-header">
        <button className="btn btn-link panel-title" type="button" data-toggle="collapse" data-target={`#${title.replace(/\s/g,'')}`} aria-expanded="true">
         {title}
        </button>
        </div>

       
  
         <div id={title.replace(/\s/g,'')} className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
         <div className="card-body">
           {children}
         </div>
         </div>
    </div>




        </div>
    )
}

export default accordion;
