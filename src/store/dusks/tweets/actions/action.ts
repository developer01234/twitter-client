import { Action } from "redux";
import { TweetsState } from "../contracts/state";

export enum ActionType {
	SET_TWEETS = "tweets/SET_TWEETS",
}

export interface SetTweetsActionInterface extends Action<ActionType> {
	type: ActionType.SET_TWEETS;
	payload: TweetsState["items"];
}

export const setTweets = (
	payload: TweetsState["items"]
): SetTweetsActionInterface => ({
	type: ActionType.SET_TWEETS,
	payload,
});

export type TweetsActions = SetTweetsActionInterface;
