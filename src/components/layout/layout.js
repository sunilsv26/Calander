import React from 'react';

import classes from './layout.module.css';
import Calander from '../calander/calander'

const layout =()=>{
    return(
        <div className={classes.Layout}>
            <Calander />
        </div>
    )
}

export default layout