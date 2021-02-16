import { SET_MODAL } from "../actions/types";

const initialState = {
  modal: false,
};

export default function modal(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case SET_MODAL:
      return {
        ...state,
        modal: !state.modal,
      };

    default:
      return state;
  }
}
