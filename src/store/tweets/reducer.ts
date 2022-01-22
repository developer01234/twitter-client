import produce from "immer";
import { TweetsState, LoadingState } from "./contracts/state";

const initState: TweetsState = {
	items: [],
	loadingState: LoadingState.NEVER,
};

export const tweetsReducer = produce((draft, action) => {}, initState);
