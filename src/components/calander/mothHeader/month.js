import React from "react";

import classes from "./month.module.css";

const month = (props) => {
  return (
    <div className={classes.Month}>
      <button onClick={props.loadPrevMonth}>Prev</button>
      <div>{props.month}</div>
      <button onClick={props.loadNextMonth}>Next</button>
    </div>
  );
};

export default month;
