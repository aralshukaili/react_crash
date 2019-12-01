import { all } from "redux-saga/effects";
import coreSagas from "../core/state/sagas";
import usersSagas from "../modules/user/state/sagas";

export default function* rootSaga() {
  yield all([coreSagas(), usersSagas()]);
}
