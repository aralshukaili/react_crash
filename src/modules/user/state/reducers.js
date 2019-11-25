import { GET_USERS_REQUEST } from "./constants";
import initialState from "./init";

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_REQUEST:
      setTimeout(() => {
        console.log("USERS RECIEVED");
      }, 2000);

      return {
        ...state,
        isFetching: true
      };

    default:
      return state;
  }
}

export default reducer;
