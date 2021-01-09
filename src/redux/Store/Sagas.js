import { takeEvery, takeLatest, put, call } from "redux-saga/effects";
import * as types from "../Actions/Types";
import { getDataFromServer, postDataToServer } from "../Service";
function* fetchAddUser(action) {
  try {
    let url = "http://localhost:5000/addUser";
    let myBody = action.payload;

    let response = yield call(postDataToServer, url, myBody);
    let result = response.json();

    if (result.error) {
      yield put({ type: types.ADD_USER_RESPONSE_ERROR, result: result.error });
    } else {
      yield put({ type: types.ADD_USER_RESPONSE_SUCCESS, result: result });
    }
  } catch (err) {
    console.log("root saga", err);
  }
}

export default function* rootSaga(params) {
  yield takeEvery(types.ADD_USER, fetchAddUser);
}
