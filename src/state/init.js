import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./rootReducer";

import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
const enhancer = composeWithDevTools({})(applyMiddleware(...middlewares));

export default createStore(reducers, enhancer);

sagaMiddleware.run(sagas);
