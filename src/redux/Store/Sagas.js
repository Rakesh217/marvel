import { takeEvery, takeLatest, put, call, take } from "redux-saga/effects";
import * as types from "../Actions/Types";
import {
  getDataFromServer,
  postDataToServer,
  validateUser,
} from "../Service/Index";
function* fetchAddUser(action) {
  try {
    let url = "http://localhost:5000/addUser";
    let myBody = action.payload;

    let response = yield call(postDataToServer, url, myBody);
    let result = yield response.json();

    if (result.error) {
      yield put({ type: types.ADD_USER_RESPONSE_ERROR, result: result.error });
    } else {
      yield put({ type: types.ADD_USER_RESPONSE_SUCCESS, result: result });
    }
  } catch (err) {
    console.log("root saga", err);
  }
}

function* fetchCharacters() {
  try {
    let api = "http://localhost:5000/getCharacters";

    let response = yield call(getDataFromServer, api);
    let result = yield response.json();
    if (result.error) {
      yield put({ type: types.GET_CHARACTERS_ERROR, result: result.error });
    } else {
      yield put({ type: types.GET_CHARACTERS_SUCCESS, result: result });
    }
  } catch (err) {
    console.log("fetchChars", err);
  }
}

function* fetchValidation(action) {
  try {
    let api = "http://localhost:5000/validateUser";
    let myBody = action.payload;
    const response = yield call(validateUser, api, myBody);
    const result = yield response.json();
    if (result.error) {
      yield put({ type: types.VALIDATE_USER_ERROR, payload: result.error });
    } else {
      yield put({ type: types.VALIDATE_USER_SUCCESS, payload: result });
    }
  } catch (err) {
    console.log(err);
  }
}

export default function* rootSaga(params) {
  yield takeEvery(types.ADD_USER, fetchAddUser);
  yield takeEvery(types.GET_CHARACTERS, fetchCharacters);
  yield takeEvery(types.VALIDATE_USER, fetchValidation);
}
