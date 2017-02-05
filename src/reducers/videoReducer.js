/**
 * Created by dcate on 2/4/17.
 */
import initialState from "./initialState";
import * as types from "../actions/actionTypes";

export default function(state = initialState.videos, action) {
    switch (action.type) {
        case types.SELECTED_VIDEO:
            return {...state, selectedVideo: action.video};
        case types.SHUTTER_VIDEOS_SUCCESS:
            return [...state, action.videos];
        default:
            return state;
    }
};
