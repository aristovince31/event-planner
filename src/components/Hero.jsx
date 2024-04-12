import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="relative mx-auto max-w-xl py-32 sm:py-38 lg:py-45">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Manage and grow your business with us
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We provide the best tools and services to help your business grow
            and succeed. Our platform is built to help you manage your business
            and grow your customer base.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <NavLink
              to="/login"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </NavLink>
            <NavLink
              to="/service"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
