import React from "react";
import PropTypes from "prop-types";

import "./ConversationFilter.css";

import { connect } from "react-redux";
import { setFilterMessage } from "../../store/actions/messages";

const ConversationFilter = ({
  messages: { filterMessage },
  setFilterMessage,
}) => {
  return (
    <div className="ConversationFilter">
      <input
        className="ConversationFilter_input"
        onChange={(e) => setFilterMessage(e.target.value)}
        value={filterMessage}
        type="text"
        placeholder="Search message by name..."
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  messages: state.messages,
});

const mapDispatchToProps = (dispatch) => ({
  setFilterMessage: (txt) => dispatch(setFilterMessage(txt)),
});

ConversationFilter.propTypes = {
  messages: PropTypes.object.isRequired,
  setFilterMessage: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ConversationFilter);
