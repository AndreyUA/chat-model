import { GET_ALL_MESSAGES } from "./types";
import { CHAT } from "../../db/db";

export const getAllMessages = () => (dispatch) => {
  const messages = CHAT;

  dispatch({
    type: GET_ALL_MESSAGES,
    payload: messages,
  });
};
