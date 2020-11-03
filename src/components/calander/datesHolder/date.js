import React from 'react';

import classes from './date.module.css';

const dates = (props)=>{
    return(
        <div className={classes.Dates}>
            {props.dates.map((date,index)=><div style={{color:(index%7===0)? "red":'none'}} key={index}>{date}</div>)}
        </div>
    )
}

export default dates;