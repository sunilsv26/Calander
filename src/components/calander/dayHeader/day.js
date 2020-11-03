import React from 'react';

import classes from './day.module.css';

const day = ()=>{
    return(
        <div className={classes.Day}>
            <div>SUN</div>
            <div>MON</div>
            <div>TUE</div>
            <div>WED</div>
            <div>THU</div>
            <div>FRI</div>
            <div>SAT</div>
        </div>
    )
}

export default day