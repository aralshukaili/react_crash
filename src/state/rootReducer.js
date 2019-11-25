import { combineReducers } from "redux";

import coreReducers from "../core/state/reducers";
import userReducers from "../modules/user/state/reducers";

export default combineReducers({
  core: coreReducers,
  user: userReducers
});
