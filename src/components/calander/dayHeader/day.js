import React from 'react';

import classes from './day.module.css';

const day = ()=>{
    return(
        <div className={classes.Day}>
            <div style={{color:'red'}}>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
        </div>
    )
}

export default day