import { all } from 'redux-saga/effects';
import watchJsonAction from './jsontest/saga'; // Replace with your user saga

export default function* rootSaga() {
  yield all([
    watchJsonAction(),
    // Add other sagas here...
  ]);
}