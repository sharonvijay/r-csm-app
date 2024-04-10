import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import registrationService from '../services/RegisterService';
import { User } from '../models/User';
const RegisterComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const registerUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user: User= {
        name: name,
        email: email,
        phoneNo: parseInt(phoneNo),
        password: password
      };

      const response = await registrationService.registerUser(user);

      console.log('Registration Successful', response);

      if (response && response.id) {
        localStorage.clear();
        localStorage.setItem('userId', response.id);
        localStorage.setItem('userName', response.name);
        localStorage.setItem('userEmail', response.email);
        localStorage.setItem('userPhoneNo', response.phoneNo);
        window.dispatchEvent(new Event('User Registered'));
        
        console.log('Registration successful. User details stored in localStorage:', response);
        console.log(localStorage);

        setTimeout(() => {
          navigate('/');
        }, 1000);
        
      } else {
        console.error('Registration failed. User data not found in the response.');
      }
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div className="flex w-screen flex-wrap text-slate-800">
      <div className="relative hidden h-screen select-none flex-col justify-center bg-blue-600 text-center md:flex md:w-1/2">
        <div className="mx-auto py-16 px-8 text-white xl:w-[40rem]">
          <span className="rounded-full bg-white px-3 py-1 font-medium text-blue-600">
            New Feature
          </span>
          <p className="my-6 text-3xl font-semibold leading-10">
            AI{" "}
            <span className="mx-auto block w-56 whitespace-nowrap rounded-lg bg-orange-400 py-2 text-white">
              Service Bot
            </span>
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
      <div className="flex w-full flex-col md:w-1/2">
        <div className="flex justify-center pt-12 md:justify-start md:pl-12">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            {" "}
            NetServe .{" "}
          </Link>
        </div>
        <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
          <p className="text-center text-3xl font-bold md:text-left md:leading-tight">
            Create your free account
          </p>
          <p className="mt-6 text-center font-medium md:text-left">
            Already using NetServe?
            <Link
              to="/login"
              className="whitespace-nowrap font-semibold text-blue-700"
            >
              Login here
            </Link>
          </p>
          <button className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition hover:border-transparent hover:bg-black hover:text-white focus:ring-2">
            <img className="mr-2 h-5" src="/images/-9jfz8JJkYKu0yDYmD5WM.svg" alt="" />{" "}
            Get started with Google
          </button>
          <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
            <div className="absolute left-1/2 h-6 -translate-x-1/2 bg-white px-4 text-center text-sm text-gray-500">
              Or use email instead
            </div>
          </div>
          <form onSubmit={registerUser} className="flex flex-col items-stretch pt-3 md:pt-8">
  <div className="flex flex-col pt-4">
    <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
        placeholder="Name"
      />
    </div>
  </div>
  <div className="flex flex-col pt-4">
    <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
        placeholder="Email"
      />
    </div>
  </div>
  <div>
    <input
      type="text"
      id="phoneNo"
      name="phoneNo"
      value={phoneNo}
      onChange={(e) => setPhoneNo(e.target.value)}
      placeholder="+91 9381217572"
      className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
    />
  </div>
  <div className="mb-4 flex flex-col pt-4">
    <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
        placeholder="Password (minimum 8 characters)"
      />
    </div>
  </div>
  <button type="submit" className="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 md:w-32">
    Sign in
  </button>
</form>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
