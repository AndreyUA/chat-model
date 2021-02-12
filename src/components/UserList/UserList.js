import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";

import "./UserList.css";
import UserSearchBar from "../UserSearchBar/UserSearchBar";
import UserListItem from "../UserListItem/UserListItem";
import Loader from "../Loader/Loader";

import { connect } from "react-redux";
import { getUsers } from "../../store/actions/users";
import { getAllMessages } from "../../store/actions/messages";

const UserList = ({
  getUsers,
  getAllMessages,
  users: { users, loading },
  messages,
}) => {
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
  messages: state.messages,
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(getUsers()),
  getAllMessages: () => dispatch(getAllMessages()),
});

UserList.propTypes = {
  getUsers: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);


// убрать загрузку с чата
// добавить обертку для окна с друзьями
// если с другом не общался - написать НАЧНИТЕ ОБЩЕНИЕ и тд
// отправка сообщений
// изменить имена
// в БД поменять время и обработать если не СЕГОДНЯ

