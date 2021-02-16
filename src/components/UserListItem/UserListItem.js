import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./UserListItem.css";
import { Link } from "react-router-dom";
import TimeUserItem from "../Time/TimeUserItem";

import { connect } from "react-redux";
import { setUser } from "../../store/actions/users";

const getLastPrivateMessages = (id, allMessages) => {
  const all = allMessages.filter((message) => +message.friendId === +id);

  return all[all.length - 1];
};

const UserListItem = ({
  user: { id, name, avatar },
  users,
  setUser,
  allMessages,
}) => {
  const [lastMessage, setLastMessage] = useState({ msg: "" });

  useEffect(() => {
    setLastMessage(getLastPrivateMessages(id, allMessages));
  }, [id, allMessages]);

  return (
    <Link
      to={`/friend/${id}`}
      onClick={() => setUser(id)}
      className={
        users.user && users.user.id === id
          ? "UserListItem UserListItem-active"
          : "UserListItem"
      }
    >
      <img className="UserListItem_avatar" src={avatar} alt="avatar" />
      <div className="UserListItem_content">
        <p className="UserListItem_name">{name}</p>
        {lastMessage ? (
          <p className="UserListItem_msg">
            {lastMessage.msg.length > 18
              ? `${lastMessage.msg.slice(0, 18)}...`
              : lastMessage.msg}
          </p>
        ) : (
          <p className="UserListItem_msg">&#8195;</p>
        )}
      </div>
      <div className="UserListItem_time">
        {lastMessage ? <TimeUserItem time={lastMessage.time} /> : null}
      </div>
    </Link>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
  allMessages: state.messages.allMessages,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (id) => dispatch(setUser(id)),
});

UserListItem.propTypes = {
  user: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  allMessages: PropTypes.array.isRequired,
  setUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListItem);
