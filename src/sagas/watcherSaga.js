/**
 * Created by dcate on 2/4/17.
 */
import { takeLatest } from "redux-saga/effects";

import { SEARCH_MEDIA_REQUEST } from "../actions/actionTypes";
import { searchMediaSaga } from "./mediaSaga";

export default function* watchSearchMedia() {
    yield takeLatest(SEARCH_MEDIA_REQUEST, searchMediaSaga);
}
