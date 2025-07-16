import { useState, useEffect } from "react";
import issueStatusService from "../services/IssueStatusService";
import { Issue } from "../models/Issue";
import axios from "axios";

const StatusComponent = () => {
	const [loggedOut, setLoggedOut] = useState(false);
	const [data, setData] = useState<Issue[]>([]);
	const [isAdmin, setIsAdmin] = useState(false);

	useEffect(() => {
		// Moved checkIsAdmin and fetchData functions inside useEffect
		const checkIsAdmin = async () => {
			const userIdString = localStorage.getItem("userId");
			const userId = userIdString ? parseInt(userIdString) : "";
			if (!userId) {
				setLoggedOut(true);
				console.error("User ID not found in localStorage");
			} else {
				try {
					const response = await axios.get(
						`https://regist-serve-10082995091.development.catalystappsail.com/registration/api/isAdmin/${userId}`
					);
					setIsAdmin(response.data);
					console.log("Admin status: " + response.data);
				} catch (error) {
					console.error("Error checking admin status:", error);
				}
			}
		};

		const fetchData = async () => {
			if (isAdmin) {
				fetchAdminIssueStatus();
			} else {
				const userIdString = localStorage.getItem("userId");
				const userId = userIdString ? userIdString : "";
				fetchUserIssueStatus(userId);
			}
		};

		const fetchUserIssueStatus = async (userId: string) => {
			try {
				const response = await issueStatusService.UserIssueStatus(userId);
				setData(response);
			} catch (error) {
				console.error("Error fetching user issue data:", error);
			}
		};

		const fetchAdminIssueStatus = async () => {
			try {
				const response = await issueStatusService.AdminIssueStatus();
				setData(response);
			} catch (error) {
				console.error("Error fetching admin issue data:", error);
			}
		};

		checkIsAdmin();
		fetchData();
	}, [isAdmin]);

	return (
		<div className="bg-white py-18 sm:py-24">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<div className="container">
						<h3 className="status-heading">Track your Status</h3>
						{loggedOut ? (
							<div className="login-message">
								Login to view your issue status
							</div>
						) : data.length > 0 ? (
							<table className="status-table border border-gray-100 shadow-gray-500/20 shadow-sm sm:rounded-lg sm:shadow-lg">
								<thead>
									<tr>
										<th>ID</th>
										<th>Name</th>
										<th>Raised At</th>
										<th>Status</th>
									</tr>
								</thead>
								<tbody>
									{data.map((issue) => (
										<tr key={issue.id}>
											<td>{issue.id}</td>
											<td>{issue.name.toUpperCase()}</td>
											<td>{issue.raisedAt}</td>
											<td>
												<span
													className={`status-${issue.status.toLowerCase()}`}>
													{issue.status}
												</span>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						) : (
							<p>Loading...</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default StatusComponent;
