import React from "react";
import PropTypes from "prop-types";

import "./ConversationSearchBar.css";
import loupe from "../../img/loupe.svg";
import phone from "../../img/phone.svg";
import camera from "../../img/camera.svg";
import more from "../../img/more.svg";
import ChosenFriend from "./ChosenFriend";

const ConversationSearchBar = () => {
  return (
    <div className="ConversationSearchBar">
      <ChosenFriend />
      <div className="ConversationSearchBar_btns">
        <img className="ConversationSearchBar_pic" src={loupe} alt="search" />
        <img className="ConversationSearchBar_pic" src={phone} alt="call" />
        <img
          className="ConversationSearchBar_pic ConversationSearchBar_camera"
          src={camera}
          alt="video-call"
        />
        <img
          className="ConversationSearchBar_pic ConversationSearchBar_more"
          src={more}
          alt="more"
        />
      </div>
    </div>
  );
};

ConversationSearchBar.propTypes = {};

export default ConversationSearchBar;
