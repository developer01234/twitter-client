import { all } from "redux-saga/effects";
import { fetchResponse, tweetsSaga } from "./dusks/tweets/sagas";
import { fetchTagsRequest, tagsSaga } from "./tags/sagas";

export default function* rootSaga() {
	yield all([tweetsSaga(), tagsSaga(), fetchTagsRequest(), fetchResponse()]);
}
