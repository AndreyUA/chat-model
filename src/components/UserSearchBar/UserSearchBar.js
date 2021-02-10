import React from "react";
import PropTypes from "prop-types";

import "./UserSearchBar.css";
import loupe from "../../img/loupe.svg";
import more from "../../img/more.svg";

const UserSearchBar = (props) => {
  return (
    <div className="UserSearchBar">
      <img className="UserSearchBar_pic" src={loupe} alt="search" />
      <img className="UserSearchBar_pic" src={more} alt="more" />
    </div>
  );
};

UserSearchBar.propTypes = {};

export default UserSearchBar;
