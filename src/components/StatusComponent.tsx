import React, { useState, useEffect } from 'react';
import issueStatusService from '../services/IssueStatusService';
import { Issue } from '../models/Issue';
import axios from 'axios';

const StatusComponent = () => {
  const [loggedOut, setLoggedOut] = useState(false);
  const [data, setData] = useState<Issue[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      setLoggedOut(true);
      console.error('User ID not found in localStorage');
    } else {
      try {
        axios.get(`http://localhost:6060/registration/api/isAdmin/${userId}`)
          .then((response) => {
            setIsAdmin(response.data);
            console.log("Admin ra babu "+isAdmin);
            if (isAdmin) {
              fetchAdminIssueStatus();
            } else {
              fetchUserIssueStatus(userId);
            }
          })
          .catch((error) => {
            console.error("Error checking admin status:", error);
          });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

  const fetchUserIssueStatus = async (userId: string) => {
    try {
      const response = await issueStatusService.UserIssueStatus(userId);
      setData(response);
    } catch (error) {
      console.error('Error fetching user issue data:', error);
    }
  };

  const fetchAdminIssueStatus = async () => {
    try {
      const response = await issueStatusService.AdminIssueStatus();
      console.log(response);
      setData(response);
    } catch (error) {
      console.error('Error fetching admin issue data:', error);
    }
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <div className="container">
            <h3 className="status-heading">Track your Status</h3>
            {data.length > 0 ? (
              <table className="status-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Raised At</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(issue => (
                    <tr key={issue.id}>
                      <td>{issue.id}</td>
                      <td>{issue.name}</td>
                      <td>{issue.raisedAt}</td>
                      <td>
                        <span className={`status-${issue.status.toLowerCase()}`}>{issue.status}</span>
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
