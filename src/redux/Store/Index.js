import { createStore, applyMiddleware } from "redux";
import reducers from "../Reducers/Index";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./Sagas";

let SagaMiddleware = createSagaMiddleware();

let middleware = [SagaMiddleware];

export const store = createStore(reducers, applyMiddleware(...middleware));

SagaMiddleware.run(rootSaga);
