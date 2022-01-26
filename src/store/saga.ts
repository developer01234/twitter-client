import { all } from "redux-saga/effects";
import { fetchResponse, testSaga } from "./dusks/tweets/sagas";

export default function* rootSaga() {
	yield all([testSaga(), fetchResponse()]);
}
