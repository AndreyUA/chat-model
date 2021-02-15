import React from "react";
import PropTypes from "prop-types";

import moment from "moment";
import Moment from "react-moment";

const TimeUserItem = ({ time }) => {
  return (
    <>
      {moment().diff(time) < 86400000 ? (
        <Moment date={time} format="HH:mm" />
      ) : moment().diff(time) < 604800000 ? (
        <Moment date={time} format="ddd" />
      ) : (
        <Moment date={time} format="DD.MM.YY" />
      )}
    </>
  );
};

TimeUserItem.propTypes = {
  time: PropTypes.object,
};

export default TimeUserItem;
