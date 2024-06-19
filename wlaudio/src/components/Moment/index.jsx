import React from "react";
import Moment from "react-moment";

function DateTime({ date }) {
  return <Moment format="DD/MM/YYYY">{date}</Moment>;
}

export default DateTime;
