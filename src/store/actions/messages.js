import { ADD_MESSAGE, GET_ALL_MESSAGES } from "./types";
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

export const addMessage = (msg) => (dispatch) => {
  dispatch({
    type: ADD_MESSAGE,
    payload: msg,
  });
};
