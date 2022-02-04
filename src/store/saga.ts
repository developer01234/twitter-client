import { all } from "redux-saga/effects";
import { fetchResponse, tweetsSaga } from "./dusks/tweets/sagas";
import { fetchTagsResponse, tagsSaga } from "./tags/sagas";

export default function* rootSaga() {
	yield all([tweetsSaga(), tagsSaga(), fetchTagsResponse(), fetchResponse()]);
}
