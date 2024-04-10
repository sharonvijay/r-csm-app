import React, { useEffect, useState } from "react";
import raiseIssueService from "../services/RaiseIssueService";
import { RaiseIssue } from "../models/RaiseIssue";

const RaiseIssueComponent = () => {
  const [issueName, setIssueName] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    const userIdFromStorage = localStorage.getItem("userId");
    if (userIdFromStorage !== null) {
      setUserId(parseInt(userIdFromStorage, 10));
    }
  }, []);
  const isButtonDisabled = userId === 0;

  const raiseIssue = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isButtonDisabled) return;

    try {
      const issue: RaiseIssue = { userId: userId, issueName: issueName };

      const response = await raiseIssueService.raiseIssue(issue);

      console.log(response);
      setSuccessMessage("Issue raised successfully");
      setTimeout(() => {
        setSuccessMessage("");
        setIssueName("");
      }, 3000);
    } catch (error) {
      console.error("Error during raising Issue", error);
    }
  };

  return (
    <section className=" py-12 text-gray-800 sm:py-24">
      <div className="mx-auto flex max-w-md flex-col rounded-lg lg:max-w-screen-xl lg:flex-row">
        <div className="max-w-2xl px-4 lg:pr-24">
          <p className="mb-2 text-blue-600">We are here to help You!</p>
          <h3 className="mb-5 text-3xl font-semibold">FAQs</h3>
          <p className="mb-16 text-lg text-gray-600">
            This Section contains some of the common issues of the users with
            little intro on how to resolve them.
          </p>
          <div className="mb-5 flex font-medium">
            <div className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-7 w-7 text-blue-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
                />
              </svg>
            </div>
            <div className="">
              <p className="mb-2">Network Connectivity</p>
              <span className="font-normal text-gray-600">
                Check network cables and connections for loose or damaged
                cables. Restart your router or modem to refresh the network
                connection.
              </span>
            </div>
          </div>
          <div className="mb-5 flex font-medium">
            <div className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-7 w-7 text-blue-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </div>
            <div className="">
              <p className="mb-2">Internet related issue</p>
              <span className="font-normal text-gray-600">
                Turn Airplane mode on and off on your device to reset the
                wireless connection. Forget and reconnect to the Wi-Fi network
                on your device.
              </span>
            </div>
          </div>
          <div className="mb-5 flex font-medium">
            <div className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-7 w-7 text-blue-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </div>
            <div className="">
              <p className="mb-2">Connectivity Issues</p>
              <span className="font-normal text-gray-600">
                Clear browser cache and cookies to resolve browsing issues.
                Contact your Internet Service Provider (ISP) to check for any
                service outages in your area..
              </span>
            </div>
          </div>
        </div>
        <div className="border border-gray-100 shadow-gray-500/20 mt-8 mb-8 max-w-md bg-white shadow-sm sm:rounded-lg sm:shadow-lg lg:mt-0">
          <div className="relative border-b border-gray-300 p-4 py-8 sm:px-8">
            <h2 className="mb-1 inline-block text-3xl font-normal font-bold">
              <span className="mr-4">Tell us about your issue.</span>
            </h2>
            <h3>
              <span className="rounded-md bg-blue-100 px-2 py-1 text-sm text-blue-700 sm:inline">
                Quick Response
              </span>
            </h3>
            <p className="text-gray-800 inline-block font-medium text-blue-500">
              Enter your details
            </p>
          </div>
          <div className="p-4 sm:p-8">
            <form onSubmit={raiseIssue}>
              <label htmlFor="userId" className="block font-medium">
                User ID:
              </label>
              <div className="mt-4 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500">
                {userId}
              </div>
              <select
                id="issueName"
                value={issueName}
                onChange={(e) => setIssueName(e.target.value)}
                required
                className="mt-4 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
              >
                <option value="">Select Issue Type</option>
                <option value="billing">Billing</option>
                <option value="technical">Technical Support</option>
                <option value="account">Account Management</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
              <button
                type="submit"
                disabled={isButtonDisabled}
                className={`mt-4 w-full rounded-lg border p-3 text-center font-medium transition focus:ring ${
                  isButtonDisabled
                    ? "border-gray-400 bg-gray-400 text-white cursor-not-allowed"
                    : "border-blue-700 bg-blue-700 text-white hover:border-blue-700 hover:bg-blue-600 hover:text-white"
                }`}
              >
                {isButtonDisabled ? "Sign In to Raise Issue" : "Submit"}
              </button>
              {isButtonDisabled && (
                <p className="mt-2 text-center text-gray-500">
                  Please sign in to raise an issue.
                </p>
              )}
            </form>
            {!isButtonDisabled && successMessage && (
              <div className="mt-2 text-center text-green-600">
                {successMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RaiseIssueComponent;
