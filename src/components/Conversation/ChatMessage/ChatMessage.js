import React from "react";
import PropTypes from "prop-types";

import "./ChatMessage.css";
import readMessage from "../../../img/read.svg";
import unreadMessage from "../../../img/unread.svg";
import Moment from "react-moment";

const ChatMessage = ({ message: { msg, time, from, to, read } }) => {
  const classes = ["ChatMessage", "asd"];
  from === "me"
    ? classes.push("ChatMessage-from_me")
    : classes.push("ChatMessage-to_me");

  return (
    <div className={classes.join(" ")}>
      <div className="ChatMessage_content">
        <div className="ChatMessage_content-text">
          <p>{msg}</p>
        </div>
        <div className="ChatMessage_content-time">
          <Moment date={time} format="HH:mm" />
          {to !== "me" ? (
            read ? (
              <img
                className="ChatMessage_content_pic"
                src={readMessage}
                alt="read"
              />
            ) : (
              <img
                className="ChatMessage_content_pic"
                src={unreadMessage}
                alt="read"
              />
            )
          ) : null}
        </div>
      </div>
    </div>
  );
};

ChatMessage.propTypes = {};

export default ChatMessage;
