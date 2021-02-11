import { GET_USERS } from "../actions/types";

const initialState = {
  users: null,
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

    default:
      return state;
  }
}
