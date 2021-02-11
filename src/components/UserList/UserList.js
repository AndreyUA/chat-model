import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";

import "./UserList.css";
import UserSearchBar from "../UserSearchBar/UserSearchBar";
import UserListItem from "../UserListItem/UserListItem";
import avatar from "../../img/avatar_.jpg";

import { connect } from "react-redux";
import { getUsers } from "../../store/actions/users";

const USERS = [
  {
    name: "Andrey",
    msg: "hello",
    avatar,
    time: new Date(),
  },
  {
    name: "Andrey",
    msg: "hello",
    avatar,
    time: new Date(),
  },
  {
    name: "Andrey",
    msg: "hello",
    avatar,
    time: new Date(),
  },
  {
    name: "Andrey",
    msg: "hello",
    avatar,
    time: new Date(),
  },
  {
    name: "Andrey",
    msg: "hello",
    avatar,
    time: new Date(),
  },
  {
    name: "Andrey",
    msg: "hello",
    avatar,
    time: new Date(),
  },
  {
    name: "Andrey",
    msg: "hello",
    avatar,
    time: new Date(),
  },
  {
    name: "Andrey",
    msg: "hello",
    avatar,
    time: new Date(),
  },
  {
    name: "Andrey",
    msg: "hello",
    avatar,
    time: new Date(),
  },
];

// редакс настроен
// теперь нужны фото, загрузчик и тд

const UserList = ({ getUsers, users: {users, loading} }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);
  return (
    <div className="UserList">
      <UserSearchBar />
      {USERS.map((user, index) => {
        return (
          <Fragment key={index}>
            <UserListItem
              name={user.name}
              msg={user.msg}
              avatar={user.avatar}
              time={user.time}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(getUsers()),
});

UserList.propTypes = {
  getUsers: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
