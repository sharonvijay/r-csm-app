import axios from "axios";

const baseUrl =
	"https://raiseissue-service-10082978854.development.catalystappsail.com/api";
const UserIssuestatusUrl = `${baseUrl}/getAllUserIssues`;
const AdminIssuestatusUrl =
	"https://resolveissue-service-10082980932.development.catalystappsail.com/resolveIssue/api/getAllIssues";

const issueStatusService = {
	UserIssueStatus: async (userId: string) => {
		try {
			const response = await axios.get(`${UserIssuestatusUrl}/${userId}`);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	AdminIssueStatus: async () => {
		try {
			const response = await axios.get(AdminIssuestatusUrl);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
};

export default issueStatusService;
