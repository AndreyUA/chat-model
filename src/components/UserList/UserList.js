import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";

import "./UserList.css";
import UserSearchBar from "../UserSearchBar/UserSearchBar";
import UserListItem from "../UserListItem/UserListItem";

import { connect } from "react-redux";
import { getUsers } from "../../store/actions/users";
import Loader from "../Loader/Loader";

const UserList = ({ getUsers, users: { users, loading } }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);
  return (
    <div className="UserList">
      <UserSearchBar />
      {loading ? (
        <Loader />
      ) : (
        users.map((user) => {
          return (
            <Fragment key={user.id}>
              <UserListItem
                userId={user.id}
                name={user.name}
                msg={user.lastMsg.msg}
                avatar={user.avatar}
                time={user.lastMsg.time}
              />
            </Fragment>
          );
        })
      )}
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
