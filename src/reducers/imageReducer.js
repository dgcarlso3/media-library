/**
 * Created by dcate on 2/4/17.
 */
import initialState from "./initialState";
import { FLICKR_IMAGES_SUCCESS, SELECTED_IMAGE } from "../actions/actionTypes";

export default function(state = initialState.images, action) {
    switch (action.type) {
        case FLICKR_IMAGES_SUCCESS:
            return [...state, action.images];
        case SELECTED_IMAGE:
            return {...state, selectedImage: action.image};
        default:
            return state;

    }
}