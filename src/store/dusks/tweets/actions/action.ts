import { Action } from "redux";
import { TweetsState } from "../contracts/state";

export enum ActionType {
	SET_TWEETS = "tweets/SET_TWEETS",
	FETCH_TWEETS = "tweets/FETCH_TWEETS",
}

export interface SetTweetsActionInterface extends Action<ActionType> {
	type: ActionType.SET_TWEETS;
	payload: TweetsState["items"];
}

export interface FetchTweetsActionInterface extends Action<ActionType> {
	type: ActionType.FETCH_TWEETS;
}

export const setTweets = (
	payload: TweetsState["items"]
): SetTweetsActionInterface => ({
	type: ActionType.SET_TWEETS,
	payload,
});

export const fetchTweets = (): FetchTweetsActionInterface => ({
	type: ActionType.FETCH_TWEETS,
});

export type TweetsActions = SetTweetsActionInterface;
