import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginService from "../services/LoginService";
import { User } from "../models/User";
import { LoginUser } from "../models/LoginUser";
import { LoginAdmin } from "../models/LoginAdmin";
const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const loginUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let response;

      if (isAdmin) {
          const admin: LoginAdmin = {
              email: email,
              password: password
          };

          response = await loginService.loginAdmin(admin);
      } else {
          const user: LoginUser = {
              email: email,
              password: password,
              isAdmin: isAdmin
          };

          response = await loginService.loginUser(user);
      }

      if (response && response.id) {
        localStorage.clear();
        localStorage.setItem("userId", response.id);
        localStorage.setItem("userName", response.name);
        localStorage.setItem("userEmail", response.email);
        localStorage.setItem("userPhoneNo", response.phoneNo);
        window.dispatchEvent(new Event("User LoggedIn"));

        console.log(
          "Login successful. User details stored in localStorage:",
          response
        );
        console.log(localStorage);

        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        console.error("Login failed. User data not found in the response.");
      }
    } catch (error) {
      console.error("Error during login", error);
    }
  };

  return (
    <div className="flex w-screen flex-wrap text-slate-800">
      <div className="flex w-full flex-col md:w-1/2">
        <div className="flex justify-center pt-12 md:justify-start md:pl-12">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            {" "}
            NetServe .{" "}
          </Link>
        </div>
        <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
          <p className="text-center text-3xl font-bold md:leading-tight md:text-left md:text-5xl">
            Welcome back <br />
            to <span className="text-blue-600">NetServe</span>
          </p>
          <p className="mt-6 text-center font-medium md:text-left">
            Sign in to your account below.
          </p>
          <form
            onSubmit={loginUser}
            className="flex flex-col items-stretch pt-3 md:pt-8"
          >
            <div className="flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col pt-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isAdmin"
                  name="isAdmin"
                  className="mr-2"
                  checked={isAdmin}
                  onChange={() => setIsAdmin(!isAdmin)}
                />

                <label
                  htmlFor="isAdmin"
                  className="text-base font-medium text-gray-700 p-3"
                >
                  Admin
                </label>
              </div>
            </div>
            <a
              href="#!"
              className="mb-6 text-center text-sm font-medium text-gray-600 md:text-left"
            >
              Forgot password?
            </a>

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 md:w-32"
            >
              Sign In
            </button>
          </form>
          <div className="py-12 text-center">
            <p className="text-gray-600">
              Don't have an account?
              <Link
                to="/register"
                className="whitespace-nowrap font-semibold text-gray-900 underline underline-offset-4"
              >
                Sign up for free.
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="relative hidden h-screen select-none bg-blue-600 bg-gradient-to-br md:block md:w-1/2">
        <div className="py-16 px-8 text-white xl:w-[40rem]">
          <span className="rounded-full bg-white px-3 py-1 font-medium text-blue-600">
            New Feature
          </span>
          <p className="my-6 text-3xl font-semibold leading-10">
            AI{" "}
            <span className="abg-white whitespace-nowrap py-2 text-cyan-300">
              Service Bot
            </span>
            .
          </p>
          <p className="mb-4">
            AI Chat Bot helps you and your team with resolving the issues
          </p>
          <Link
            to="/"
            className="font-semibold tracking-wide text-white underline underline-offset-4"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
