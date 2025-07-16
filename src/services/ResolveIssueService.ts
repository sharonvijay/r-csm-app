import axios from "axios";
import { Issue } from "../models/Issue";
import { AcceptIssue } from "../models/AcceptIssue";
import { ResolveIssue } from "../models/ResolveIssue";

const baseUrl =
	"https://resolveissue-service-10082980932.development.catalystappsail.com/resolveIssue/api";
const getALlIssuesUrl = `${baseUrl}/getAllIssues`;
const resolveIssueUrl = `${baseUrl}/resolveIssue`;
const acceptIssueUrl = `${baseUrl}/acceptIssue`;

const resolveIssueService = {
	getIssues: async () => {
		try {
			const response = await axios.get(getALlIssuesUrl);
			return response.data;
		} catch (error) {
			throw error;
		}
	},

	updateIssueStatus: async (issue: Issue) => {
		let acceptIssue: AcceptIssue = {
			issueId: 0,
			adminId: 0,
		};

		let resolveIssue: ResolveIssue = {
			issueId: 0,
			adminId: 0,
		};

		if (issue.status === "PROCESSING") {
			acceptIssue.issueId = issue.id;
			acceptIssue.adminId = issue.resolvedBy;

			try {
				const response = await axios.post(acceptIssueUrl, acceptIssue);
				return response.data;
			} catch (error) {
				throw error;
			}
		} else if (issue.status === "RESOLVED") {
			resolveIssue.issueId = issue.id;
			resolveIssue.adminId = issue.resolvedBy;

			try {
				const response = await axios.post(resolveIssueUrl, resolveIssue);
				return response.data;
			} catch (error) {
				throw error;
			}
		}
	},
};

export default resolveIssueService;
