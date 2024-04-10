import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [defaultStatus, setDefaultStatus] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    updateLoginStatus();
  }, []);

  const updateLoginStatus = () => {
    const userId = localStorage.getItem("userId");
    setLoggedIn(!!userId);
    if (userId) {
      checkAdminStatus(userId);
    }
  };

  const checkAdminStatus = (userId:string) => {
    axios
      .get(`http://localhost:6060/registration/api/isAdmin/${userId}`)
      .then((response) => {
        setIsAdmin(response.data);
        console.log(isAdmin);
      })
      .catch((error) => {
        console.error("Error checking admin status:", error);
      });
  };

  const updateDefaultStatus = () => {
    setDefaultStatus(!defaultStatus);
  };

  const logout = () => {
    localStorage.clear();
    updateLoginStatus();
    updateDefaultStatus();

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50 position-sticky">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">NetServe</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </Link>
            {/* <span className="ml-1.5 text-lg font-medium">NetServe</span> */}
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link to="/" className="text-indigo-800">
              Home
            </Link>
            {!isAdmin ? (
              <Link to="/raise-issue" className="text-indigo-600">
                Raise Issue
              </Link>
            ) : (
              <Link to="/resolve-issue" className="text-indigo-600">
                Resolve Issue
              </Link>
            )}
            <Link to="/status" className="text-indigo-600">
              Status
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {loggedIn ? (
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={logout}
              >
                Logout
              </button>
            ) : (
              <div>
                {defaultStatus && (
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </button>
                )}
                {defaultStatus && (
                  <button
                    className="bg-white text-blue font-bold py-2 px-4 rounded-full"
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </button>
                )}
              </div>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
