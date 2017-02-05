/**
 * Created by dcate on 2/4/17.
 */
import { takeLatest } from "redux-saga/effects";

import { SEARCH_MEDIA_REQUEST, SEARCH_MEDIA_ERROR } from "../actions/actionTypes";
import { searchMediaSaga, searchMediaErrorSaga } from "./mediaSaga";

export function* watchSearchMedia() {
    yield takeLatest(SEARCH_MEDIA_REQUEST, searchMediaSaga);
}

export function* watchSearchError() {
    yield takeLatest(SEARCH_MEDIA_ERROR, searchMediaErrorSaga);
}
