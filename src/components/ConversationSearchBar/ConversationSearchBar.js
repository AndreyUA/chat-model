import React from "react";
import PropTypes from "prop-types";

import "./ConversationSearchBar.css";
import loupe from "../../img/loupe.svg";
import phone from "../../img/phone.svg";
import camera from "../../img/camera.svg";
import more from "../../img/more.svg";
import ChosenFriend from "./ChosenFriend";

import { connect } from "react-redux";
import { setModal } from "../../store/actions/modal";

const ConversationSearchBar = ({
  setModal,
  user,
  setFilterActive,
  filterActive,
}) => {
  return (
    <div className="ConversationSearchBar">
      <ChosenFriend />
      <div className="ConversationSearchBar_btns">
        <button
          disabled={user ? false : true}
          className="ConversationSearchBar_btn"
          onClick={() => {
            setFilterActive(!filterActive);
          }}
        >
          <img className="ConversationSearchBar_pic" src={loupe} alt="search" />
        </button>
        <button
          disabled={user ? false : true}
          className="ConversationSearchBar_btn"
          onClick={() => setModal()}
        >
          <img className="ConversationSearchBar_pic" src={phone} alt="call" />
        </button>
        <button
          disabled={user ? false : true}
          className="ConversationSearchBar_btn"
          onClick={() => setModal()}
        >
          <img
            className="ConversationSearchBar_pic ConversationSearchBar_camera"
            src={camera}
            alt="video-call"
          />
        </button>
        <button className="ConversationSearchBar_btn">
          <img
            className="ConversationSearchBar_pic ConversationSearchBar_more"
            src={more}
            alt="more"
          />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.users.user,
});

const mapDispatchToProps = (dispatch) => ({
  setModal: () => dispatch(setModal()),
});

ConversationSearchBar.propTypes = {
  setModal: PropTypes.func.isRequired,
  setFilterActive: PropTypes.func.isRequired,
  filterActive: PropTypes.bool,
  user: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationSearchBar);
