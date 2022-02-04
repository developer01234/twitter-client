import { setLoading, setTags } from "./actions/action";
import { call, put, takeLatest } from "redux-saga/effects";
import { TagsApi } from "../../services/api/tagsApi";
import { LoadingState } from "./contracts/state";
import { TagsActionType } from "./actions/action";

export function* fetchTagsResponse(): any {
	try {
		const data = yield call(TagsApi.fetchTagsResponse);
		yield put(setTags(data));
	} catch (error) {
		yield put(setLoading(LoadingState.ERROR));
	}
}

export function* tagsSaga() {
	yield takeLatest(TagsActionType.FETCH_TAGS, fetchTagsResponse);
}
