import React from "react";

import "./UserSettings.css";

const UserSettings = () => {
  return (
    <div className="UserSettings">
      <ul class="UserSettings">
        <li className="UserSettings_item">settings</li>
        <li className="UserSettings_item">my profile</li>
        <li className="UserSettings_item">share contacts</li>
        <li className="UserSettings_item">help</li>
        <li className="UserSettings_item">logout</li>
      </ul>
    </div>
  );
};

export default UserSettings;
