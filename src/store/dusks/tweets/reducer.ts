import produce, { Draft } from "immer";
import { ActionType, TweetsActions } from "./actions/action";
import { TweetsState, LoadingState } from "./contracts/state";

const initState: TweetsState = {
	items: [],
	loadingState: LoadingState.NEVER,
};

export const tweetsReducer = produce(
	(draft: Draft<TweetsState>, action: TweetsActions) => {
		if (action.type === ActionType.SET_TWEETS) {
			draft.items = action.payload;
		}
	},
	initState
);
