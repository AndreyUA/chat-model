import React, { useEffect } from "react";
import PropTypes from "prop-types";

import "./Conversation.css";
import ConversationSearchBar from "../ConversationSearchBar/ConversationSearchBar";
import ConversationChatBar from "../ConversationChatBar/ConversationChatBar";
import ConversationChatInput from "../ConversationChatInput/ConversationChatInput";

// обработать теперь правильную работы без ссылки
// загружать профиль и тд ТОЛЬКО после перехода по ссылкам
// сейчас профиль выбирается ТОЛЬКО по клику на список друзей
// уже почти получилось

const Conversation = ({ match }) => {
  useEffect(() => {
    console.log(match.params.id);
  });
  return (
    <div className="Conversation">
      <ConversationSearchBar />
      <ConversationChatBar />
      <ConversationChatInput />
    </div>
  );
};

Conversation.propTypes = {};

export default Conversation;
