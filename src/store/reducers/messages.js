import { ADD_MESSAGE, GET_ALL_MESSAGES } from "../actions/types";

const initialState = {
  allMessages: [],
  loading: true,
};

export default function messages(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_MESSAGES:
      return {
        ...state,
        allMessages: payload,
        loading: false,
      };

    case ADD_MESSAGE:
      return {
        ...state,
        allMessages: [...state.allMessages, payload],
      };

    default:
      return state;
  }
}
