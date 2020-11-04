import React from "react";

import classes from "./year.module.css";

const year = (props) => {
  return (
    <div className={classes.Year}>
      <button onClick={props.goToday}>Go To Today</button>
      <div className={classes.Today}>{props.today}</div>
      <div style={{fontWeight:'bold'}}>Selected Year</div>
      <input
        type="number"
        value={props.year}
        onChange={(event) => props.yearChanged(event)}
      />
    </div>
  );
};

export default year;
