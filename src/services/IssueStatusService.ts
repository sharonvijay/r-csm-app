import axios from 'axios';

const baseUrl = 'http://localhost:7070/raiseIssue/api';
const UserIssuestatusUrl = `${baseUrl}/getAllUserIssues`;
const AdminIssuestatusUrl = 'http://localhost:9090/resolveIssue/api/getAllIssues';

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
  }
};

export default issueStatusService;
