import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

const composeEnhancers =
	(typeof window !== "undefined" &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
