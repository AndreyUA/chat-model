import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";

import "./UserList.css";
import UserSearchBar from "../UserSearchBar/UserSearchBar";
import UserListItem from "../UserListItem/UserListItem";
import Loader from "../Loader/Loader";

import { connect } from "react-redux";
import { getUsers } from "../../store/actions/users";
import { getAllMessages } from "../../store/actions/messages";

const UserList = ({ getUsers, getAllMessages, users: { users, loading } }) => {
  useEffect(() => {
    getUsers();
    getAllMessages();
  }, [getUsers, getAllMessages]);
  
  return (
    <div className="UserList">
      <UserSearchBar />
      {loading ? (
        <Loader />
      ) : (
        <div className="UserList_wrapper">
          {users.map((user) => {
            return (
              <Fragment key={user.id}>
                <UserListItem user={user} />
              </Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(getUsers()),
  getAllMessages: () => dispatch(getAllMessages()),
});

UserList.propTypes = {
  getUsers: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);

// изменить времена
// сделать прокрутку чата вниз
