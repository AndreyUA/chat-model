import { GET_USERS, SET_USER } from "./types";
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

export const setUser = (id) => (dispatch) => {
  const user = USERS.filter((USER) => USER.id === id);

  dispatch({
    type: SET_USER,
    payload: user[0],
  });
};
