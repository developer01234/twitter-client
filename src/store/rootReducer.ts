import { combineReducers } from "redux";
import { tweetsReducer } from "./dusks/tweets/reducer";
import { tagsReducer } from "./tags/reducer";

export const rootReducer = combineReducers({
	tweets: tweetsReducer,
	tags: tagsReducer,
});
