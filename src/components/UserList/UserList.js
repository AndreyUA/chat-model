import React, { Fragment } from "react";
import PropTypes from "prop-types";

import "./UserList.css";
import UserSearchBar from "../UserSearchBar/UserSearchBar";
import UserListItem from "../UserListItem/UserListItem";

import avatar from "../../img/avatar_.jpg";

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

const UserList = (props) => {
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

UserList.propTypes = {};

export default UserList;
