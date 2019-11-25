import { CHANGE_LOCALE } from "./constants";
import initialState from "./init";

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      return {
        ...state,
        locale: action.payload,
        rtl: action.payload === "ar" ? true : state.rtl
      };
    default:
      return state;
  }
}

export default reducer;
