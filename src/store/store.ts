import { compose, createStore } from "redux";
import { rootReducer } from "./rootReducer";
import createSagaMiddleware from "redux-saga";

const composeEnhancers =
	(typeof window !== "undefined" &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const sagaMiddleware = createSagaMiddleware();
sagaMiddleware.run();

export const store = createStore(rootReducer, composeEnhancers());
