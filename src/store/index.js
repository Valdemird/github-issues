import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import Epics from "../store/epics";
import reducer from "./reducers";
const epicMiddleware = createEpicMiddleware();

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
    applyMiddleware(epicMiddleware)
);

const store = createStore(reducer, enhancer);
epicMiddleware.run(Epics);
export default store;
