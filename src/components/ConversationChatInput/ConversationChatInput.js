import React, { useState } from "react";
import PropTypes from "prop-types";

import "./ConversationChatInput.css";
import send from "../../img/send.svg";
import Message from "../../db/models/message";

import { connect } from "react-redux";
import { addMessage } from "../../store/actions/messages";

const ConversationChatInput = ({ user, addMessage }) => {
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newMsgs = new Message(
      user.id,
      message,
      "me",
      "friend"
    ).createMessage();

    addMessage(newMsgs);
    setMessage("");
  };

  return (
    <div className="ConversationChatInput">
      <form
        className="ConversationChatInput_form"
        onSubmit={(e) => submitHandler(e)}
      >
        <p>
          <textarea
            className="ConversationChatInput_text"
            onChange={(e) => setMessage(e.target.value)}
            name="text"
            placeholder="Write a message..."
            value={message}
          ></textarea>
        </p>

        <button className="ConversationChatInput_btn" type="submit">
          <img
            className="ConversationChatInput_btn_pic"
            src={send}
            alt="send-message"
          />
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.users.user,
});

const mapDispatchToProps = (dispatch) => ({
  addMessage: (msg) => dispatch(addMessage(msg)),
});

ConversationChatInput.propTypes = {
  user: PropTypes.object,
  addMessage: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationChatInput);
