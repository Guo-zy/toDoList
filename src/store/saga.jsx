import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from '../action/actionType'
import { initListAction } from '../action/index'
import { service } from '../axios/index'

function* getInitList() {
  try {
    const res = yield service({ method: 'get', url: '/api/todolist' })
    yield put(initListAction(res.data))
  } catch (error) {
    alert(error)
  }
}

function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList)
}

export default mySaga
