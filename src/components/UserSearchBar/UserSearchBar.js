import React from "react";
import PropTypes from "prop-types";

import "./UserSearchBar.css";
import loupe from "../../img/loupe.svg";
import more from "../../img/more.svg";

const UserSearchBar = (props) => {
  return (
    <div className="UserSearchBar">
      <button className="UserSearchBar_btn">
        <img className="UserSearchBar_pic" src={loupe} alt="search" />
      </button>
      <button className="UserSearchBar_btn">
        <img
          className="UserSearchBar_pic UserSearchBar_btn-more"
          src={more}
          alt="more"
        />
      </button>
    </div>
  );
};

UserSearchBar.propTypes = {};

export default UserSearchBar;
