import { createSelector } from "reselect";
import { RootState } from "../../store";
import { LoadingState, TweetsState } from "./contracts/state";

export const selectTweets = (state: RootState): TweetsState => state.tweets;
export const selectLoadingState = (
	state: RootState
): LoadingState => // eslint-disable-next-line @typescript-eslint/no-unused-expressions
	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	selectTweets(state).loadingState;
export const selectIsLoading = (state: RootState): boolean =>
	selectLoadingState(state) === LoadingState.LOADING;

export const selectIsLoaded = (state: RootState): boolean =>
	selectLoadingState(state) === LoadingState.LOADED;

export const selectTweetsItems = createSelector(
	selectTweets,
	(tweets) => tweets.items
);
