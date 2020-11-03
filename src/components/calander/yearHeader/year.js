import React from "react";

import classes from "./year.module.css";

const year = (props) => {
  return (
    <div className={classes.Year}>
      <button>Today</button>
      <div className={classes.Today}>{props.today}</div>
      <input
        type="number"
        value={props.year}
        onChange={(event) => props.yearChanged(event)}
      />
    </div>
  );
};

export default year;
