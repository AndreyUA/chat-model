import { GET_USERS, SET_USER } from "../actions/types";

const initialState = {
  users: null,
  user: null,
  loading: true,
};

export default function users(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
      };

    case SET_USER:
      return {
        ...state,
        user: payload,
      };

    default:
      return state;
  }
}
