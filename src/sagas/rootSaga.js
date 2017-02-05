/**
 * Created by dcate on 2/4/17.
 */
import { fork } from "redux-saga/effects";

import watchSearchMedia from "./watcherSaga";

export default function* rootSaga() {
    yield fork(watchSearchMedia);
}