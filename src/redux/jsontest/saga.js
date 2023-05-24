import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../../util/api';
import { GET_JSON_REQUEST,getJsonRequestSuccess, getJsonRequestFail } from './action'; // Replace with your user actions

function* fetchComment(action) {
  try {
    const response = yield call(api.get,'/comments');
    yield put(getJsonRequestSuccess(response.data));
  } catch (e) {
    yield put(getJsonRequestFail(e.message));
  }
}

export default function* watchJsonAction() {
  yield takeEvery(GET_JSON_REQUEST, fetchComment);
}