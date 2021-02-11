import React from "react";
import PropTypes from "prop-types";

import "./Conversation.css";
import ConversationSearchBar from "../ConversationSearchBar/ConversationSearchBar";
import ConversationChatBar from "../ConversationChatBar/ConversationChatBar";
import ConversationChatInput from "../ConversationChatInput/ConversationChatInput";

const Conversation = (props) => {
  return (
    <div className="Conversation">
      <ConversationSearchBar />
      <ConversationChatBar />
      <ConversationChatInput />
    </div>
  );
};

Conversation.propTypes = {};

export default Conversation;
