import {
  GET_ALL_MESSAGES,
  GET_PRIVATE_MESSAGES,
} from "./types";
import { CHAT } from "../../db/db";

export const getAllMessages = () => (dispatch) => {
  const messages = CHAT;

  setTimeout(() => {
    dispatch({
      type: GET_ALL_MESSAGES,
      payload: messages,
    });
  }, 2000);
};

export const getPrivateMessages = (id) => (dispatch) => {
  const privateMessages = CHAT.filter((message) => +message.friendId === +id);

  dispatch({
    type: GET_PRIVATE_MESSAGES,
    payload: null,
  });

  setTimeout(() => {
    dispatch({
      type: GET_PRIVATE_MESSAGES,
      payload: privateMessages,
    });
  }, 1000);
};
