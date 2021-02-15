import React from "react";
import PropTypes from "prop-types";

import "./UserSearchBar.css";
import loupe from "../../img/loupe.svg";
import more from "../../img/more.svg";

const UserSearchBar = ({
  filterActive,
  setFilterActive,
  settingsActive,
  setSettingsActive,
}) => {
  return (
    <div className="UserSearchBar">
      <button
        className="UserSearchBar_btn"
        onClick={() => {
          setFilterActive(!filterActive);
        }}
      >
        <img className="UserSearchBar_pic" src={loupe} alt="search" />
      </button>
      <button
        className="UserSearchBar_btn"
        onClick={() => {
          setSettingsActive(!settingsActive);
        }}
      >
        <img
          className="UserSearchBar_pic UserSearchBar_btn-more"
          src={more}
          alt="more"
        />
      </button>
    </div>
  );
};

UserSearchBar.propTypes = {
  filterActive: PropTypes.bool,
  setFilterActive: PropTypes.func.isRequired,
  settingsActive: PropTypes.bool,
  setSettingsActive: PropTypes.func.isRequired,
};

export default UserSearchBar;
