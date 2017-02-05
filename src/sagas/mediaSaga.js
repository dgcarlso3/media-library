/**
 * Created by dcate on 2/4/17.
 */
import { put, call } from "redux-saga/effects";

import { shutterStockVideo } from "../api/shutterStockVideo";
import { flickrImage } from "../api/flickrImage";
import { SEARCH_MEDIA_ERROR } from "../actions/actionTypes";
import {
    SHUTTER_VIDEOS_SUCCESS,
    SELECTED_VIDEO,
    FLICKR_IMAGES_SUCCESS,
    SELECTED_IMAGE
} from "../actions/actionTypes";

export function* searchMediaSaga({ payload }) {
    console.log(payload, "Payload");
    try {
        const videos = yield call(shutterStockVideo, payload);
        const images = yield call(flickrImage, payload);
        yield [
            put({ type: SHUTTER_VIDEOS_SUCCESS, videos }),
            put({ type: SELECTED_VIDEO, video: videos[0] }),
            put({ type: FLICKR_IMAGES_SUCCESS, images}),
            put({ type: SELECTED_IMAGE, image: images[0]})
        ];
    } catch (error) {
        yield put({ type: SEARCH_MEDIA_ERROR, error });
    }
}

export function* searchMediaErrorSaga({ payload }) {
    console.log(payload, "Error");
}
