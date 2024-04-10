import React, { useEffect, useState } from 'react';
import resolveIssueService from '../services/ResolveIssueService';
import { Issue } from '../models/Issue';

const ResolveIssueComponent = () => {
    const [data, setData] = useState<Issue[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await resolveIssueService.getIssues();
            const updatedData = response.map((issue: Issue) => ({ ...issue, issueStatus: '' }));
            setData(updatedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const updateStatus = async (issue: Issue, selectedStatus: string) => {
        if (selectedStatus) {
            issue.status = selectedStatus;

            const currentDate = new Date();
            const day = currentDate.getDate().toString().padStart(2, '0');
            const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
            const year = currentDate.getFullYear();
            const formattedDate = `${day}-${month}-${year}`;
            issue.resolvedAt = formattedDate;

            const userIdString = localStorage.getItem('userId');
            const userId = userIdString ? parseInt(userIdString) : 0;

            if (userId) {
                issue.resolvedBy = userId;
                try {
                    await resolveIssueService.updateIssueStatus(issue);
                    console.log('Issue status updated successfully:', issue);

                    const updatedData = data.map((item) => (item.id === issue.id ? { ...issue } : item));
                    setData(updatedData);
                } catch (error) {
                    console.error('Error updating issue status:', error);
                }
            } else {
                console.error('User ID not found in localStorage');
            }
        } else {
            console.error('Please select a valid status');
        }
    };

    return (
        <div className="bg-white py-18 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center"></div>
                <div className="container">
                    <h3 className="status-heading">Admin Resolve Issue</h3>
                    <table className="status-table border border-gray-100 shadow-gray-500/20 shadow-sm sm:rounded-lg sm:shadow-lg">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Issue</th>
                                <th>Raised At</th>
                                <th>Raised By</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(issue => (
                                <tr key={issue.id} id={`issue-${issue.id}`}>
                                    <td>{issue.id}</td>
                                    <td>{issue.name}</td>
                                    <td>{issue.raisedAt}</td>
                                    <td>{issue.raisedBy.name}</td>
                                    <td>
                                        <span className={`status-${issue.status.toLowerCase()}`}>{issue.status}</span>
                                    </td>
                                    <td>
                                        <form>
                                            <select value={issue.issueStatus} onChange={(e) => updateStatus(issue, e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                                <option value="" disabled hidden>Choose an Action</option>
                                                <option value="PROCESSING">ACCEPT</option>
                                                <option value="RESOLVED">RESOLVE</option>
                                                <option value="REJECTED">REJECT</option>
                                            </select>
                                        </form>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ResolveIssueComponent;
