import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Call.css";
import call from "../../../img/phone.svg";
import camera from "../../../img/camera.svg";
import micro from "../../../img/microphone.svg";

import { connect } from "react-redux";
import { setModal } from "../../../store/actions/modal";

const Call = ({ user, modal, setModal }) => {
  const [sound, setSound] = useState(true);
  const [video, setVideo] = useState(true);

  return (
    <div className={modal.modal ? "Call" : "Call-close"}>
      <div className="Call_window">
        {user ? (
          <>
            <img className="Call_avatar" src={user.avatar} alt="" />
            <div>
              <p className="Call_user">{user.name}</p>
              <p>call...</p>
            </div>
            <div className="Call_control">
              <div className="Call_control_btn">
                <button
                  className={video ? "Call_btn" : "Call_btn Call_btn-off"}
                  onClick={() => setVideo(!video)}
                >
                  <img className="Call_btn_pic" src={camera} alt="video-call" />
                </button>
                <p>video {video ? "ON" : "OFF"}</p>
              </div>
              <div className="Call_control_btn" onClick={() => setModal()}>
                <button className="Call_btn Call_btn-call">
                  <img className="Call_btn_pic" src={call} alt="call" />
                </button>
                <p>finish call</p>
              </div>
              <div className="Call_control_btn">
                <button
                  className={sound ? "Call_btn" : "Call_btn Call_btn-off"}
                  onClick={() => {
                    setSound(!sound);
                  }}
                >
                  <img className="Call_btn_pic" src={micro} alt="call" />
                </button>
                <p>sound {sound ? "ON" : "OFF"}</p>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.users.user,
  modal: state.modal,
});

const mapDispatchToProps = (dispatch) => ({
  setModal: () => dispatch(setModal()),
});

Call.propTypes = {
  user: PropTypes.object,
  modal: PropTypes.object.isRequired,
  setModal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Call);
