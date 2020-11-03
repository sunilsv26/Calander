import React from "react";

import classes from "./month.module.css";

const month = (props) => {
  return (
    <div className={classes.Month}>
      <button>Prev</button>
      <div>{props.month}</div>
      <button>Next</button>
    </div>
  );
};

export default month;
