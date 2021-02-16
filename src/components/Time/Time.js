import React from "react";
import PropTypes from "prop-types";

import moment from "moment";
import Moment from "react-moment";

const Time = ({ time }) => {
  return (
    <>
      {moment().diff(time) > 86400000 ? (
        <Moment date={time} format="YY.MM.DD, HH:mm" />
      ) : (
        <Moment date={time} format="HH:mm" />
      )}
    </>
  );
};

Time.propTypes = {
  time: PropTypes.object,
};

export default Time;
