import { GET_USERS } from "./types";
import { USERS } from "../../db/db";

export const getUsers = () => (dispatch) => {
  const users = USERS;

  setTimeout(() => {
    dispatch({
      type: GET_USERS,
      payload: users,
    });
  }, 2000);
};
