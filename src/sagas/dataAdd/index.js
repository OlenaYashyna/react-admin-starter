import { fork, takeEvery, call, put } from 'redux-saga/effects'
import {addUserSuccs, setUsers} from '../../actions/actions';
import { getUsers, addUser } from '../../api';


function* dataAddSaga() {
  const users = yield call(getUsers)
  yield put(setUsers(users));
}

function* dataAddSagaWatcher() {
  yield takeEvery('USERS_FETCH_START', dataAddSaga)
}

function* userAddSaga(user) {
  yield put(addUser(user));
  console.log('user', user)
  yield (getUsers)
}

// function* userAddSaga(user) {
//   console.log('user', user)
//   const users = yield call(addUser)
//   yield put(addUserSuccs(users));
// }

function* userAddSagaWatcher() {
  yield takeEvery('USER_ADD', userAddSaga)
}

// function* userAddSagaWatcher() {
//   yield takeEvery('USER_ADD_SUCCESS', userAddSaga)
// }


export default function* root() {
  yield fork(dataAddSagaWatcher);
  yield fork(userAddSagaWatcher);

}
