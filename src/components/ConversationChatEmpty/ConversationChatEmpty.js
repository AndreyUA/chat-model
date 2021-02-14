import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

const ConversationChatEmpty = ({ messages: { loading } }) => {
  return (
    <div className="ConversationChatBar">
      {loading ? null : (
        <h2 className="ConversationChatBar_warning">Choose your friend</h2>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  messages: state.messages,
});

ConversationChatEmpty.propTypes = {
  messages: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(ConversationChatEmpty);
