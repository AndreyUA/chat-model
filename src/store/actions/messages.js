import { ADD_MESSAGE, GET_ALL_MESSAGES, SET_MESSAGE_FILTER } from "./types";
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

export const setFilterMessage = (txt) => (dispatch) => {
  dispatch({
    type: SET_MESSAGE_FILTER,
    payload: txt,
  });
};
