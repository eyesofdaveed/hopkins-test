import { takeEvery, put, call } from 'redux-saga/effects'
import { FETCH_DATA, REQUEST_DATA, SEARCH_QUERY } from './types'
import { hideLoader, showLoader } from './actions'

export function* sagaWatcher() {
  yield takeEvery(REQUEST_DATA, fetchInitialData)
  yield takeEvery(SEARCH_QUERY, fetchSearchData)
}

function* fetchInitialData() {
  try {
    yield put(showLoader())
    const payload = yield call(fetchData)
    yield put({ type: FETCH_DATA, payload })
    yield put(hideLoader())
  } catch (e) {
    yield put(hideLoader())
  }
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

async function fetchData(param = "") {
  const response = await fetch(`https://api.nobelprize.org/2.1/laureates${param && "?name="}` + param)
  return await response.json()
}