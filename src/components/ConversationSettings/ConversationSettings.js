import React from "react";

import "./ConversationSettings.css";

const ConversationSettings = () => {
  return (
    <div className="ConversationSettings">
      <ul className="ConversationSettings_list">
        <li className="ConversationSettings_item">see profile</li>
        <li className="ConversationSettings_item">turn off notifications</li>
        <li className="ConversationSettings_item">block contact</li>
        <li className="ConversationSettings_item">delete chat</li>
        <li className="ConversationSettings_item">share contact</li>
      </ul>
    </div>
  );
};

export default ConversationSettings;
