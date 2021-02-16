import React, { Fragment, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import "./ConversationChatBar.css";
import ChatMessage from "../ChatMessage/ChatMessage";
import Loader from "../Loader/Loader";

import { connect } from "react-redux";

const getPrivateMessages = (id, allMessages) =>
  allMessages.filter((message) => +message.friendId === +id);

const ConversationChatBar = ({
  users,
  messages: { allMessages, filterMessage },
  match,
}) => {
  const [privateMessages, setPrivateMessages] = useState([]);

  const scrollBlock = useRef(null);

  useEffect(() => {
    setPrivateMessages(getPrivateMessages(match.params.id, allMessages));
  }, [match, allMessages]);

  useEffect(() => {
    if (scrollBlock.current) {
      scrollBlock.current.scrollTop = scrollBlock.current.scrollHeight;
    }
  });

  if (!users.user) {
    return <Redirect to={"/"} />;
  }

  return (
    <div ref={scrollBlock} className="ConversationChatBar">
      {privateMessages.length > 0 ? (
        allMessages && privateMessages ? (
          filterMessage !== "" ? (
            privateMessages
              .filter((message) =>
                message.msg.toLowerCase().includes(filterMessage.toLowerCase())
              )
              .map((message) => {
                return (
                  <Fragment key={message.id}>
                    <ChatMessage message={message} />
                  </Fragment>
                );
              })
          ) : (
            privateMessages.map((message) => {
              return (
                <Fragment key={message.id}>
                  <ChatMessage message={message} />
                </Fragment>
              );
            })
          )
        ) : (
          <div className="ConversationChatBar_loader">
            <Loader />
          </div>
        )
      ) : (
        <div className="ConversationChatBar">
          <h2 className="ConversationChatBar_warning">Start your chat now!</h2>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
  messages: state.messages,
});

ConversationChatBar.propTypes = {
  users: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(ConversationChatBar);
