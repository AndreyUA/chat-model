import React from "react";
import PropTypes from "prop-types";

import "./Conversation.css";
import ConversationSearchBar from "../ConversationSearchBar/ConversationSearchBar";
import ConversationChatBar from "../ConversationChatBar/ConversationChatBar";

const Conversation = (props) => {
  return (
    <div className="Conversation">
      <ConversationSearchBar />
      <ConversationChatBar />
    </div>
  );
};

Conversation.propTypes = {};

export default Conversation;
