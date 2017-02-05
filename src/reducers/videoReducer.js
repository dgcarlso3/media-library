/**
 * Created by dcate on 2/4/17.
 */
import initialState from "./initialState";
import { SELECTED_VIDEO, SHUTTER_VIDEOS_SUCCESS } from "../actions/actionTypes";

export default function(state = initialState.videos, action) {
    switch (action.type) {
        case SELECTED_VIDEO:
            return {...state, selectedVideo: action.video};
        case SHUTTER_VIDEOS_SUCCESS:
            return [...state, action.videos];
        default:
            return state;
    }
};
