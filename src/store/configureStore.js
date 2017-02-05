/**
 * Created by dcate on 2/4/17.
 */
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";

import rootReducer from "../reducers/rootReducer";
import rootSaga from "../sagas/rootSaga";

const configureStore = () => {
    const sagaMiddleWare = createSagaMiddleware();
    return {
        ...createStore(rootReducer, applyMiddleware(sagaMiddleWare)),
        runSaga: sagaMiddleWare.run(rootSaga)
    };
};

export default configureStore;