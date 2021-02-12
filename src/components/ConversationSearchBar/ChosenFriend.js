import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

const ChosenFriend = ({ user }) => {
  return (
    <>
      {user ? (
        <div className="ConversationSearchBar_user">
          <img
            className="ConversationSearchBar_user_avatar"
            src={user.avatar}
            alt="avatar"
          />
          <div className="ConversationSearchBar_user_info">
            <p className="ConversationSearchBar_user_name">{user.name}</p>
            <p className="ConversationSearchBar_user_phone">
              {user.phoneNumber}
            </p>
          </div>
        </div>
      ) : (
        <div className="ConversationSearchBar_user"></div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.users.user,
});

ChosenFriend.propTypes = {
  user: PropTypes.object,
};

export default connect(mapStateToProps)(ChosenFriend);
