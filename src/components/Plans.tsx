import React from "react";

const Plans = () => {
  return (
    <section className="max-w-6xl mx-auto pt-10 pb-36 px-8">
      <div className="max-w-md mx-auto mb-14 text-center">
        <h1 className="text-4xl font-semibold mb-6 lg:text-5xl">
          <span className="text-indigo-600">Flexible</span> Plans
        </h1>
        <p className="text-xl text-gray-500 font-medium">
          Choose a plan that works best for you and your team.
        </p>
      </div>

      <div className="flex flex-col justify-between items-center lg:flex-row lg:items-start">
        <div className="w-full flex-1 mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
          <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
            <img
              src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"
              alt=""
              className="rounded-3xl w-20 h-20"
            />
            <div className="ml-5">
              <span className="block text-2xl font-semibold">Basic</span>
              <span>
                <span className="font-medium text-gray-500 text-xl align-top">
                  $&thinsp;
                </span>
                <span className="text-3xl font-bold">10 </span>
              </span>
              <span className="text-gray-500 font-medium">/ user</span>
            </div>
          </div>
          <ul className="mb-7 font-medium text-gray-500">
            <li className="flex text-lg mb-2">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" alt=""/>
              <span className="ml-3">
                Includes essential{" "}
                <span className="text-black">network monitoring services</span>
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">
                Flexible access to{" "}
                <span className="text-black">network diagnostic tools</span>
              </span>
            </li>
            <li className="flex text-lg">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" alt=""/>
              <span className="ml-3">
                <span className="text-black">5 TB</span> cloud storage for{" "}
                <span className="text-black">network data</span>
              </span>
            </li>
          </ul>
          <a
            href="#/"
            className="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl"
          >
            Choose Plan
            <img
              src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
              className="ml-2"
              alt=""
            />
          </a>
        </div>

        <div className="w-full flex-1 p-8 order-1 shadow-xl rounded-3xl bg-gray-900 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
          <div className="mb-8 pb-8 flex items-center border-b border-gray-600">
            <img
              src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg"
              alt=""
              className="rounded-3xl w-20 h-20"
            />
            <div className="ml-5">
              <span className="block text-3xl font-semibold text-white">
                Standard
              </span>
              <span>
                <span className="font-medium text-xl align-top">$&thinsp;</span>
                <span className="text-3xl font-bold text-white">24 </span>
              </span>
              <span className="font-medium">/ user</span>
            </div>
          </div>
          <ul className="mb-10 font-medium text-xl">
            <li className="flex mb-6">
              <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" alt=""/>
              <span className="ml-3">
                All features in <span className="text-white">Basic</span>
              </span>
            </li>
            <li className="flex mb-6">
              <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" alt=""/>
              <span className="ml-3">
                Advanced{" "}
                <span className="text-white">network security monitoring</span>
              </span>
            </li>
            <li className="flex">
              <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" alt=""/>
              <span className="ml-3">
                <span className="text-white">15 TB</span> cloud storage for{" "}
                <span className="text-white">network backups</span>
              </span>
            </li>
          </ul>
          <a
            href="#/"
            className="flex justify-center items-center bg-indigo-600 rounded-xl py-6 px-4 text-center text-white text-2xl"
          >
            Choose Plan
            <img
              src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
              className="ml-2"
              alt=""
            />
          </a>
        </div>

        <div className="w-full flex-1 mt-8 p-8 order-3 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none">
          <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
            <img
              src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg"
              alt=""
              className="rounded-3xl w-20 h-20"
            />
            <div className="ml-5">
              <span className="block text-2xl font-semibold">Premium</span>
              <span>
                <span className="font-medium text-gray-500 text-xl align-top">
                  $&thinsp;
                </span>
                <span className="text-3xl font-bold">35 </span>
              </span>
              <span className="text-gray-500 font-medium">/ user</span>
            </div>
          </div>
          <ul className="mb-7 font-medium text-gray-500">
            <li className="flex text-lg mb-2">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" alt="" />
              <span className="ml-3">
                All features in <span className="text-black">Standard</span>
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" alt="" />
              <span className="ml-3">
                Priority support for{" "}
                <span className="text-black">network emergencies</span>
              </span>
            </li>
            <li className="flex text-lg">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" alt=""/>
              <span className="ml-3">
                <span className="text-black">Unlimited</span> cloud storage for{" "}
                <span className="text-black">network resources</span>
              </span>
            </li>
          </ul>
          <a
            href="#/"
            className="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl"
          >
            Choose Plan
            <img
              src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
              className="ml-2"
              alt=""
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Plans;
