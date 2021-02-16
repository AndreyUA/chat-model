import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./UserList.css";
import UserSearchBar from "../UserSearchBar/UserSearchBar";
import UserListItem from "../UserListItem/UserListItem";
import UserFilter from "../UserFilter/UserFilter";
import UserSettings from "../UserSettings/UserSettings";
import Loader from "../Loader/Loader";

import { connect } from "react-redux";
import { getUsers } from "../../store/actions/users";
import { getAllMessages } from "../../store/actions/messages";

const UserList = ({ getUsers, getAllMessages, users: { users, loading } }) => {
  const [filterActive, setFilterActive] = useState(false);
  const [settingsActive, setSettingsActive] = useState(false);
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    getUsers();
    getAllMessages();
  }, [getUsers, getAllMessages]);

  return (
    <div className="UserList">
      <UserSearchBar
        filterActive={filterActive}
        setFilterActive={setFilterActive}
        settingsActive={settingsActive}
        setSettingsActive={setSettingsActive}
      />
      {filterActive ? (
        <UserFilter filterName={filterName} setFilterName={setFilterName} />
      ) : null}
      {settingsActive ? <UserSettings /> : null}
      {loading ? (
        <Loader />
      ) : (
        <div className="UserList_wrapper">
          {users
            .filter((user) =>
              user.name.toLowerCase().includes(filterName.toLowerCase())
            )
            .map((user) => {
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
  getAllMessages: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);

// кнопки в меню чата
