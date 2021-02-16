import { combineReducers } from "redux";

import users from "./users";
import messages from "./messages";
import modal from "./modal";

export default combineReducers({
  users,
  messages,
  modal,
});
