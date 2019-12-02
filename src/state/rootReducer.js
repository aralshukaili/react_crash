import { combineReducers } from "redux";

import coreReducers from "../core/state/reducers";
import userReducers from "../modules/user/state/reducers";

const initialState = { text: "", loading: false, error: "" };

function googleReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_GOOGLE_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "GET_GOOGLE_SUCCESS":
      return {
        ...state,
        loading: false,
        text: action.payload
      };
    case "GET_GOOGLE_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}

export default combineReducers({
  core: coreReducers,
  user: userReducers,
  google: googleReducer
});
