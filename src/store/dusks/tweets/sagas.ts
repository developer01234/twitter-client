import { ActionType, setLoading, setTweets } from "./actions/action";
// import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { TweetsApi } from "../../../services/api/tweetsApi";
import { LoadingState } from "./contracts/state";

export function* fetchResponse(): any {
	try {
		const data = yield call(TweetsApi.fetchTweets);
		yield put(setTweets(data));
	} catch (error) {
		yield put(setLoading(LoadingState.ERROR));
	}
}

export function* testSaga() {
	yield takeLatest(ActionType.FETCH_TWEETS, fetch);
}
