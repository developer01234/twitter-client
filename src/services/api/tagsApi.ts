import axios from "axios";
import { TagsState } from "../../store/tags/contracts/state";

export const TagsApi = {
	fetchTags(): Promise<TagsState["items"]> {
		return axios.get("http://localhost:3001/tags").then(({ data }) => data);
	},
};
