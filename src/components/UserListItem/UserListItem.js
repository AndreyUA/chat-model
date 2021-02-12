import React from "react";
import PropTypes from "prop-types";

import "./UserListItem.css";
import Moment from "react-moment";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { setUser } from "../../store/actions/users";

const UserListItem = ({ name, msg, avatar, time, userId, users, setUser }) => {
  return (
    <Link
      to={`/friend/${userId}`}
      onClick={() => setUser(userId)}
      className={
        users.user && users.user.id === userId
          ? "UserListItem UserListItem-active"
          : "UserListItem"
      }
    >
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
    </Link>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (id) => dispatch(setUser(id)),
});

UserListItem.propTypes = {
  name: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListItem);
