import { createSelector } from "reselect";
import { RootState } from "../store";
import { LoadingState, TagsState } from "./contracts/state";

export const selectTags = (state: RootState): TagsState => state.tags;
export const selectLoadingState = (
	state: RootState
): LoadingState => // eslint-disable-next-line @typescript-eslint/no-unused-expressions
	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	selectTags(state).loadingState;
export const selectIsLoading = (state: RootState): boolean =>
	selectLoadingState(state) === LoadingState.LOADING;

export const selectIsLoaded = (state: RootState): boolean =>
	selectLoadingState(state) === LoadingState.LOADED;

export const selectTagsItems = createSelector(selectTags, (tags) => tags.items);
