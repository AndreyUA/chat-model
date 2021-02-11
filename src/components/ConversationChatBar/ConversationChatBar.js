import React, { Fragment } from "react";
import PropTypes from "prop-types";

import "./ConversationChatBar.css";
import ChatMessage from "../ChatMessage/ChatMessage";

const CHAT = [
  { msg: "hello", time: new Date(), from: "username", to: "me", read: true },
  { msg: "are you here?", time: new Date(), from: "username", to: "me", read: true },
  { msg: "hi!", time: new Date(), from: "me", to: "username", read: true },
  {
    msg: "how are you?",
    time: new Date(),
    from: "username",
    to: "me",
    read: true,
  },
  {
    msg: "i'm fine, and you?",
    time: new Date(),
    from: "me",
    to: "username",
    read: true,
  },
  {
    msg: "me too! tnx!",
    time: new Date(),
    from: "username",
    to: "me",
    read: true,
  },
  {
    msg: "where are you now?",
    time: new Date(),
    from: "me",
    to: "username",
    read: false,
  },
  {
    msg: "shall we meet tomorrow?",
    time: new Date(),
    from: "me",
    to: "username",
    read: false,
  },
];

const ConversationChatBar = (props) => {
  return (
    <div className="ConversationChatBar">
      {CHAT.map((message, index) => {
        return (
          <Fragment key={index}>
            <ChatMessage message={message} index={index} />
          </Fragment>
        );
      })}
    </div>
  );
};

ConversationChatBar.propTypes = {};

export default ConversationChatBar;
