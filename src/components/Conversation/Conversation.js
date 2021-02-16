import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Conversation.css";
import ConversationSearchBar from "../ConversationSearchBar/ConversationSearchBar";
import ConversationChatInput from "../ConversationChatInput/ConversationChatInput";
import ConversationFilter from "../ConversationFilter/ConversationFilter";

const Conversation = ({ children }) => {
  const [filterActive, setFilterActive] = useState(false);

  return (
    <div className="Conversation">
      <ConversationSearchBar
        filterActive={filterActive}
        setFilterActive={setFilterActive}
      />
      {filterActive ? <ConversationFilter /> : null}
      {children}
      <ConversationChatInput />
    </div>
  );
};

Conversation.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Conversation;
