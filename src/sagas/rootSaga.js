/**
 * Created by dcate on 2/4/17.
 */
import {fork} from "redux-saga/effects";

import {watchSearchMedia, watchSearchError} from "./watcherSaga";

export default function* rootSaga() {
    yield [
        fork(watchSearchMedia),
        fork(watchSearchError)
    ];
}