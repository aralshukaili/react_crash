import { takeEvery, put, delay } from "redux-saga/effects";
import { CHANGE_LOCALE } from "./constants";

import { getUsers } from "../../modules/user/state/actions";

function* changeLocaleSaga() {
  console.log("LOCALE CHANGED DO SOME SAGA FUNCTIONALITY");
  // console.log("dispatch user_get_request");

  yield delay(2000);

  console.log("WAITED FOR 2 secs");

  // const filter = {
  //   name: "awadh"
  // };

  // console.log(getUsers({ filter }));
  // yield put(getUsers({ filter }));
}

export default function* sagas() {
  yield takeEvery(CHANGE_LOCALE, changeLocaleSaga);
}
