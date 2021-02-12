import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";

import "./ConversationChatBar.css";
import ChatMessage from "../ChatMessage/ChatMessage";

import { connect } from "react-redux";
import { getAllMessages } from "../../store/actions/messages";

import { CHAT } from "../../db/db";

const ConversationChatBar = ({
  users: { user, loading },
  getAllMessages,
}) => {
  useEffect(() => {
    getAllMessages();
  }, [getAllMessages]);
  return (
    <>
      {loading ? (
        <div className="ConversationChatBar"></div>
      ) : (
        <div className="ConversationChatBar">
          {user ? (
            CHAT.map((message) => {
              return (
                <Fragment key={message.id}>
                  <ChatMessage message={message} />
                </Fragment>
              );
            })
          ) : (
            <h2 className="ConversationChatBar_warning">Choose your friend</h2>
          )}
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  getAllMessages: () => dispatch(getAllMessages()),
});

ConversationChatBar.propTypes = {
  users: PropTypes.object.isRequired,
  getAllMessages: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationChatBar);
