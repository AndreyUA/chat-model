import {
  ADD_MESSAGE,
  GET_ALL_MESSAGES,
  SET_MESSAGE_FILTER,
} from "../actions/types";

const initialState = {
  allMessages: [],
  filterMessage: "",
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

    case SET_MESSAGE_FILTER:
      return {
        ...state,
        filterMessage: payload,
      };

    default:
      return state;
  }
}
