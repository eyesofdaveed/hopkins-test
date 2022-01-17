import { takeEvery, put, call } from 'redux-saga/effects'
import { FETCH_DATA, REQUEST_DATA } from './types'
import { hideLoader, showLoader } from './actions'
import { store } from '..'

export function* sagaWatcher() {
  yield takeEvery(REQUEST_DATA, fetchSearchData)
}

function* fetchSearchData(action) {
  try {
    yield put(showLoader())
    const payload = yield call(fetchData, action.param)
    yield put({ type: FETCH_DATA, payload })
    yield put(hideLoader())
  } catch (e) {
    yield put(hideLoader())
  }
}

async function fetchData() {
  const param = store.getState().data.searchQuery;
  const searchQuery = param && `name=${param}`
  const offsetCount = `offset=${(store.getState().data.pageNumber - 1) * 10}`
  const response = await fetch(`https://api.nobelprize.org/2.1/laureates?limit=10&${offsetCount}&${searchQuery}`)
  return await response.json()
}