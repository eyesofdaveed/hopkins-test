import { takeEvery, put, call } from 'redux-saga/effects'
import { select } from 'redux-saga/effects'

import { FETCH_DATA, REQUEST_DATA } from './types'
import { hideLoader, showLoader } from './actions'
import { selectSearchQuery, selectPageNumber } from './selectors'

export function* sagaWatcher() {
  yield takeEvery(REQUEST_DATA, fetchSearchData)
}

function* fetchSearchData() {
  try {
    yield put(showLoader())
    const param = yield select(selectSearchQuery);
    const offset = yield select(selectPageNumber)
    const payload = yield call(fetchData, param, offset)
    yield put({ type: FETCH_DATA, payload })
    yield put(hideLoader())
  } catch (e) {
    yield put(hideLoader())
  }
}

async function fetchData(param, offset) {
  const searchQuery = param && `name=${param}`
  const offsetCount = `offset=${(offset - 1) * 10}`
  const response = await fetch(`https://api.nobelprize.org/2.1/laureates?limit=10&${offsetCount}&${searchQuery}`)
  return await response.json()
}