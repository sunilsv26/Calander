import React  from 'react';

import classes from './year.module.css';

const year = (props)=>{
    return(
        <div className={classes.Year}>
            <button>Prev</button>
            <input type='number' value={props.year} onChange={(event)=>props.yearChanged(event)}/>
            <button>Next</button>
        </div>
    )
}

export default year;