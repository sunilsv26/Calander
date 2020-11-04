import React from "react";

import classes from "./date.module.css";

const dates = (props) => {
    let date = new Date ();
    let toda = date.getDate();
    let yr = date.getFullYear();
    let month = date.getMonth();
  return (
    <div className={classes.Dates}>
      {props.dates.map((date, index) => (
        <div
          style={{
            color: index % 7 === 0 ? "red" : "none",
            backgroundColor: (date===toda && yr===props.year && month ===props.month)?'steelblue':null,
          }}
          key={index}
        >
          {date}
        </div>
      ))}
    </div>
  );
};

export default dates;
