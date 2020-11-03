import React, { Component } from 'react'

import classes from './calander.module.css';
import Year  from './yearHeader/year'

class Calander extends Component{
    state ={
        year:2020,
    }

    yearInputChangeHandler=(event)=>{
        this.setState({year:event.target.value})
    }
    render(){
        return(
            <div className={classes.Calander}>
                <Year year={this.state.year} yearChanged={this.yearInputChangeHandler} />
            </div>
        )
    }
    
}

export default Calander;