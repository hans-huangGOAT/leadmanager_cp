import { combineReducers } from "redux";
import leads from "./leads";
import messages from "./messages";
import errors from "./errors";
import auth from "./auth";

export default combineReducers({
  leads,
  messages,
  errors,
  auth,
});
