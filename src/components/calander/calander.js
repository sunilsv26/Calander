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
    year: "",
    month: "",
    dates: [],
    today: "",
    presentDate: "",
    prsentYear: "",
    prsentMonth: "",
  };

  showDates = (month, year) => {
    let firstDay = new Date(year, month).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    let dates = new Array(firstDay).fill("");
    for (let i = 1; i <= daysInMonth; i++) {
      dates.push(i);
    }
    this.setState({ dates: dates });
  };

  componentDidMount() {
    this.goToTodayHandler();
    let today = new Date();
    let monthIndex = today.getMonth();
    let year = today.getFullYear();
    let date = today.getDate();
    this.setState({
      presentDate: date,
      prsentMonth: monthIndex,
      prsentYear: year,
    });
  }
  goToTodayHandler = () => {
    this.getTodayHandler();
    let today = new Date();
    let monthIndex = today.getMonth();
    let year = today.getFullYear();
    this.setState({ year: year, month: monthIndex });
    this.showDates(monthIndex, year);
  };

  getTodayHandler = () => {
    let today = new Date();
    this.setState({ today: today.toDateString() });
  };

  yearInputChangeHandler = (event) => {
    let currMonthIndex = this.state.month;
    let currYear;
    currYear = event.target.value;
    this.showDates(currMonthIndex, currYear);
    this.setState({ year: +currYear, month: currMonthIndex });
  };

  loadPrvMonthHandler = () => {
    let currMonthIndex = this.state.month;
    let currYear = this.state.year;
    currYear = currMonthIndex === 0 ? currYear - 1 : currYear;
    currMonthIndex = currMonthIndex === 0 ? 11 : currMonthIndex - 1;
    this.showDates(currMonthIndex, currYear);
    this.setState({ month: currMonthIndex, year: currYear });
  };

  loadNextMonthHandler = () => {
    let currMonthIndex = this.state.month;
    let currYear = this.state.year;
    currYear = currMonthIndex === 11 ? currYear + 1 : currYear;
    currMonthIndex = currMonthIndex === 11 ? 0 : currMonthIndex + 1;
    this.showDates(currMonthIndex, currYear);
    this.setState({ month: currMonthIndex, year: currYear });
  };

  render() {
    console.log(this.state.presentDate);
    return (
      <div className={classes.Calander}>
        <Year
          year={this.state.year}
          yearChanged={this.yearInputChangeHandler}
          today={this.state.today}
          goToday={this.goToTodayHandler}
        />
        <Month
          month={months[this.state.month]}
          loadPrevMonth={this.loadPrvMonthHandler}
          loadNextMonth={this.loadNextMonthHandler}
        />
        <DayNames />
        <Dates dates={this.state.dates} 
        year={this.state.year}
        month={this.state.month}/>
      </div>
    );
  }
}

export default Calander;
