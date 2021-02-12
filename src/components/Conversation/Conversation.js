import React from "react";
import PropTypes from "prop-types";

import "./Conversation.css";
import ConversationSearchBar from "../ConversationSearchBar/ConversationSearchBar";
import ConversationChatInput from "../ConversationChatInput/ConversationChatInput";

const Conversation = ({ children }) => {
  return (
    <div className="Conversation">
      <ConversationSearchBar />
      {children}
      <ConversationChatInput />
    </div>
  );
};

Conversation.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Conversation;
