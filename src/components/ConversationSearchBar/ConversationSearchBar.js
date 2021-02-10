import React from "react";
import PropTypes from "prop-types";

import "./ConversationSearchBar.css";
import loupe from "../../img/loupe.svg";
import phone from "../../img/phone.svg";
import camera from "../../img/camera.svg";
import more from "../../img/more.svg";
import avatar from '../../img/avatar_.jpg'

const ConversationSearchBar = (props) => {
  return (
    <div className="ConversationSearchBar">
      <div className="ConversationSearchBar_user">
          <img className="ConversationSearchBar_user_avatar" src={avatar} alt="avatar"/>
          <div className="ConversationSearchBar_user_info">
              <p className="ConversationSearchBar_user_name">Andrey</p>
              <p className="ConversationSearchBar_user_phone">(303) 555-0105</p>
          </div>
      </div>
      <div className="ConversationSearchBar_btns">
        <img className="ConversationSearchBar_loupe" src={loupe} alt="search" />
        <img className="ConversationSearchBar_loupe" src={phone} alt="call" />
        <img
          className="ConversationSearchBar_loupe"
          src={camera}
          alt="video-call"
        />
        <img className="ConversationSearchBar_more" src={more} alt="more" />
      </div>
    </div>
  );
};

ConversationSearchBar.propTypes = {};

export default ConversationSearchBar;
