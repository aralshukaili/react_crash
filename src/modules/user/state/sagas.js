import { takeEvery } from "redux-saga/effects";
import { GET_USERS_REQUEST } from "./constants";

function* userRequestMade() {
  console.log("USER REQUEST MADE");
}

export default function* sagas() {
  yield takeEvery(GET_USERS_REQUEST, userRequestMade);
}
