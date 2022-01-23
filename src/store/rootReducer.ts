import { combineReducers } from "redux";
import { tweetsReducer } from "./dusks/tweets/reducer";

export const rootReducer = combineReducers({
	tweets: tweetsReducer,
});
