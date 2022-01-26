import { TweetsState } from "./../../store/dusks/tweets/contracts/state";
import axios from "axios";

export const TweetsApi = {
	fetchTweets(): Promise<TweetsState["items"]> {
		return axios
			.get("https://trycode.pw/c/LXC9A.json")
			.then(({ data }) => data);
	},
};
