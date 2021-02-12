import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import "./ConversationChatBar.css";
import ChatMessage from "../ChatMessage/ChatMessage";

import { connect } from "react-redux";
import { getPrivateMessages } from "../../store/actions/messages";

import { CHAT } from "../../db/db";
import Loader from "../Loader/Loader";

const ConversationChatBar = ({
  users,
  messages: { loading, privateMessage },
  getPrivateMessages,
  match,
}) => {
  useEffect(() => {
    getPrivateMessages(match.params.id);
  }, [match, getPrivateMessages]);

  if (!users.user) {
    return <Redirect to={"/"} />;
  }

  return (
    <div className="ConversationChatBar">
      {privateMessage ? (
        privateMessage.map((message) => {
          return (
            <Fragment key={message.id}>
              <ChatMessage message={message} />
            </Fragment>
          );
        })
      ) : (
        <div className="ConversationChatBar_loader">
          <Loader />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
  messages: state.messages,
});

const mapDispatchToProps = (dispatch) => ({
  getPrivateMessages: (id) => dispatch(getPrivateMessages(id)),
});

ConversationChatBar.propTypes = {
  users: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
  getPrivateMessages: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationChatBar);
