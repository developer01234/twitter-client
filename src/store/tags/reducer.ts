import produce, { Draft } from "immer";
import { TagsActionType, TagsActions } from "./actions/action";
import { TagsState, LoadingState } from "./contracts/state";

const initState: TagsState = {
	items: [],
	loadingState: LoadingState.NEVER,
};

export const tagsReducer = produce(
	(draft: Draft<TagsState>, action: TagsActions) => {
		if (action.type === TagsActionType.SET_TAGS) {
			draft.items = action.payload;
			draft.loadingState = LoadingState.LOADED;
		}

		if (action.type === TagsActionType.FETCH_TAGS) {
			draft.items = [];
			draft.loadingState = LoadingState.LOADING;
		}

		if (action.type === TagsActionType.SET_LOADING_STATE) {
			draft.loadingState = action.payload;
		}
	},
	initState
);
