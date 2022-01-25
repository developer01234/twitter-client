import { ActionType } from "./actions/action";
import { takeEvery } from "redux-saga/effects";

export function* fetch() {
	console.log("testing...");
}

export function* testSaga() {
	yield takeEvery(ActionType.FETCH_TWEETS, fetch);
}
