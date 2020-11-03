import React, { Component } from "react";

import classes from "./calander.module.css";
import Year from "./yearHeader/year";
import Month from "./mothHeader/month";
import DayNames from "./dayHeader/day";
import Dates from "./datesHolder/date";

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

class Calander extends Component {
  state = {
    year: null,
    month: "",
    dates: [],
    today: "",
  };

  showDates = (month, year) => {
    let firstDay = new Date(year, month).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    let dates = new Array(firstDay).fill("");
    console.log(dates);
    for (let i = 1; i <= daysInMonth; i++) {
      dates.push(i);
    }
    this.setState({ dates: dates });
  };

  componentDidMount() {
    this.getTodayHandler();
    let today = new Date();
    let monthIndex = today.getMonth();
    let year = today.getFullYear();
    this.setState({year:year,month:monthIndex})
    this.showDates(monthIndex,year);
  }

  getTodayHandler = () => {
    let today = new Date();
    this.setState({ today: today.toDateString() });
  };

  yearInputChangeHandler = (event) => {
    this.setState({ year: event.target.value });
  };

  loadPrvMonthHandler=()=>{
    let currMonthIndex = this.state.month;
    let currYear= this.state.year; 
    currMonthIndex = currMonthIndex ===0 ? 11:currMonthIndex-1;
    currYear = currMonthIndex ===0? currYear-1:currYear;
    this.showDates(currMonthIndex,currYear)
    this.setState({month:currMonthIndex,year:currYear})
  }

  loadNextMonthHandler=()=>{
    let currMonthIndex = this.state.month;
    let currYear= this.state.year; 
    currMonthIndex = currMonthIndex ===11 ? 0:currMonthIndex+1;
    currYear = currMonthIndex ===11? currYear+1:currYear;
    this.showDates(currMonthIndex,currYear)
    this.setState({month:currMonthIndex,year:currYear})
  }

  render() {
    return (
      <div className={classes.Calander}>
        <Year
          year={this.state.year}
          yearChanged={this.yearInputChangeHandler}
          today={this.state.today}
        />
        <Month month={months[this.state.month]}
        loadPrevMonth={this.loadPrvMonthHandler}
        loadNextMonth={this.loadNextMonthHandler} />
        <DayNames />
        <Dates dates={this.state.dates}/>
      </div>
    );
  }
}

export default Calander;
