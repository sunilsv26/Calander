import React from 'react';

import classes from './date.module.css';

const dates = (props)=>{
    return(
        <div className={classes.Dates}>
            {props.dates.map(date=><div key={date}>{date}</div>)}
        </div>
    )
}

export default dates;