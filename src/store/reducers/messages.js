import { GET_ALL_MESSAGES, GET_PRIVATE_MESSAGES } from "../actions/types";

const initialState = {
  messages: null,
  privateMessage: null,
  loading: true,
};

export default function messages(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_MESSAGES:
      return {
        ...state,
        messages: payload,
        loading: false,
      };

    case GET_PRIVATE_MESSAGES:
      return {
        ...state,
        privateMessage: payload,
        loading: false,
      };

    default:
      return state;
  }
}
