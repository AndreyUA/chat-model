import { GET_ALL_MESSAGES } from "../actions/types";

const initialState = {
  messages: null,
  private: null,
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

    default:
      return state;
  }
}
