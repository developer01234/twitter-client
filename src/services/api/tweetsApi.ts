import { TweetsState } from "./../../store/dusks/tweets/contracts/state";
import axios from "axios";

export const TweetsApi = {
	fetchTweetsResponse(): Promise<TweetsState["items"]> {
		return axios.get("http://localhost:3001/tweets").then(({ data }) => data);
	},
};
