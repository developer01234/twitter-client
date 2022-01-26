import { LoadingState } from "./../contracts/state";
import { Action } from "redux";
import { TweetsState } from "../contracts/state";

export enum ActionType {
	SET_TWEETS = "tweets/SET_TWEETS",
	SET_LOADING_STATE = "tweets/SET_LOADING_STATE",
	FETCH_TWEETS = "tweets/FETCH_TWEETS",
}

export interface SetTweetsActionInterface extends Action<ActionType> {
	type: ActionType.SET_TWEETS;
	payload: TweetsState["items"];
}

export interface FetchTweetsActionInterface extends Action<ActionType> {
	type: ActionType.FETCH_TWEETS;
}

export interface SetTweetsLoadingStateActionInterface
	extends Action<ActionType> {
	type: ActionType.SET_LOADING_STATE;
	payload: LoadingState;
}

export const setTweets = (
	payload: TweetsState["items"]
): SetTweetsActionInterface => ({
	type: ActionType.SET_TWEETS,
	payload,
});

export const setLoading = (
	payload: LoadingState
): SetTweetsLoadingStateActionInterface => ({
	type: ActionType.SET_LOADING_STATE,
	payload,
});

export const fetchTweets = (): FetchTweetsActionInterface => ({
	type: ActionType.FETCH_TWEETS,
});

export type TweetsActions =
	| SetTweetsActionInterface
	| SetTweetsLoadingStateActionInterface;
