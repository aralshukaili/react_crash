import { all, takeLatest, put, call, delay, race } from "redux-saga/effects";
import axios from "axios";
import coreSagas from "../core/state/sagas";
import usersSagas from "../modules/user/state/sagas";

function* runGoogleSaga() {
  console.log("google saga");
  try {
    const resp = yield race([
      call(axios.get, "http://localhost:5000"),
      delay(5000)
    ]);
    if (resp && resp.status === 200) {
      yield put({ type: "GET_GOOGLE_SUCCESS", payload: resp.data });
    } else {
      yield put({ type: "GET_GOOGLE_ERROR", error: "Request timeout" });
    }
  } catch (e) {
    yield put({ type: "GET_GOOGLE_ERROR", error: "Network error" });
  }
  // axios.get("http://localhost:5000").then(resp => {
  //   put({type: "GET_GOOGLE_SUCCESS", payload: resp.data})
  // });
}

function* getGoogleSaga() {
  yield takeLatest("GET_GOOGLE_REQUEST", runGoogleSaga);
}

export default function* rootSaga() {
  yield all([coreSagas(), usersSagas(), getGoogleSaga()]);
}
