import React from "react";
import PropTypes from "prop-types";

import "./UserListItem.css";
import Moment from "react-moment";

const UserListItem = ({ name, msg, avatar, time }) => {
  return (
    <div className="UserListItem">
      <img className="UserListItem_avatar" src={avatar} alt="avatar" />
      <div className="UserListItem_content">
        <p className="UserListItem_name">{name}</p>
        <p className="UserListItem_msg">{msg}</p>
      </div>
      <div className="UserListItem_time">
        {/*
            ПОТОМ ВЫНЕСИ В ОТДЕЛЬНЫЙ КОМПОНЕНТ ВРЕМЯ, ТАМ БУДЕТ ЛОГИКИ МНОГО
          */}
        <Moment date={time} format="HH:mm" />
      </div>
    </div>
  );
};

UserListItem.propTypes = {
  name: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
};

export default UserListItem;
