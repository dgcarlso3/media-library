/**
 * Created by dcate on 2/4/17.
 */
import { combineReducers } from "redux";

import images from "./imageReducer";
import videos from "./videoReducer";

const rootReducer = combineReducers({
    images,
    videos
});

export default rootReducer;