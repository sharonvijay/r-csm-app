import axios from "axios";
import { RaiseIssue } from "../models/RaiseIssue";

const baseUrl =
	"https://raiseissue-service-10082978854.development.catalystappsail.com/api";
const raiseIssueUrl = `${baseUrl}/createIssue`;

const raiseIssueService = {
	raiseIssue: async (issue: RaiseIssue) => {
		try {
			const response = await axios.post(raiseIssueUrl, issue);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
};

export default raiseIssueService;
