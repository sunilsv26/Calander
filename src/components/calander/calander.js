import React, { Component } from 'react'

import classes from './calander.module.css';
import Year  from './yearHeader/year';
import Month from './mothHeader/month'

class Calander extends Component{
    state ={
        year:2020,
        month:'November',
        today:'',
    }

    componentDidMount(){
       this.getTodayHandler() 
    }

    getTodayHandler=()=>{
        let today = new Date();
        this.setState({today:today.toDateString()})
    }

    yearInputChangeHandler=(event)=>{
        this.setState({year:event.target.value})
    }
    render(){
        return(
            <div className={classes.Calander}>
                <Year year={this.state.year} 
                yearChanged={this.yearInputChangeHandler} 
                today={this.state.today}/>
                <Month month={this.state.month} />
            </div>
        )
    }
    
}

export default Calander;