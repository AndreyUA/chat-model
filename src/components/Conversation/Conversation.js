import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Conversation.css";
import ConversationSearchBar from "../ConversationSearchBar/ConversationSearchBar";
import ConversationChatInput from "../ConversationChatInput/ConversationChatInput";
import ConversationSettings from "../ConversationSettings/ConversationSettings";
import ConversationFilter from "../ConversationFilter/ConversationFilter";

const Conversation = ({ children }) => {
  const [filterActive, setFilterActive] = useState(false);
  const [settingsActive, setSettingAsctive] = useState(false);

  return (
    <div className="Conversation">
      <ConversationSearchBar
        filterActive={filterActive}
        setFilterActive={setFilterActive}
        settingsActive={settingsActive}
        setSettingAsctive={setSettingAsctive}
      />
      {filterActive ? <ConversationFilter /> : null}
      {settingsActive ? <ConversationSettings /> : null}
      {children}
      <ConversationChatInput />
    </div>
  );
};

Conversation.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Conversation;
