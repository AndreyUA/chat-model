import { SET_MODAL } from "./types";

export const setModal = () => (dispatch) => {
  dispatch({
    type: SET_MODAL,
  });
};
