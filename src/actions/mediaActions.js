/**
 * Created by dcate on 2/4/17.
 */
import {
    SEARCH_MEDIA_REQUEST,
    SELECTED_IMAGE,
    SELECTED_VIDEO
} from "./actionTypes";

export const selectedImageAction = (image) => ({
    type: SELECTED_IMAGE,
    image
});

export const selectedVideoAction = (video) => ({
    type: SELECTED_VIDEO,
    video
});

export const searchMediaAction = (payload) => ({
    type: SEARCH_MEDIA_REQUEST,
    payload
});
