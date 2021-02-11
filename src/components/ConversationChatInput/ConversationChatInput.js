import React, { useState } from "react";
import PropTypes from "prop-types";

import "./ConversationChatInput.css";
import send from "../../img/send.svg";

const ConversationChatInput = (props) => {
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(message);
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

ConversationChatInput.propTypes = {};

export default ConversationChatInput;
