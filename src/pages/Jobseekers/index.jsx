import React from "react";
import Navigation from "../Components/Navigations";
import { BsBag } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import Footer from "../Components/Footer";

const Jobseekers = () => {
  return (
    <>
      <Navigation />
      {/* <div className="bg-gradient-to-t from-zinc-50 to-zinc-300 min-h-screen px-6"> */}
      <div className="bg-BgColor-homecolor min-h-screen px-6">
        <div className="lg:p-20">
          <h6 className="text-3xl sm:text-4xl font-bold text-center mb-5">
            Find and become a professional with passion
          </h6>
          <p className="text-center text-lg sm:text-xl mb-10 px-2">
            We specialize in connecting job seekers with the best career
            opportunities across the Gulf region. Whether you're a seasoned
            professional or a fresh graduate, our platform is designed to help
            you navigate the job market with ease.
          </p>

          {/* Responsive Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-2xl mx-auto">
            <div className="relative w-full sm:w-auto">
              <BsBag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Job"
                className="pl-10 pr-4 py-2 w-full sm:w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="relative w-full sm:w-auto">
              <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Title Location"
                className="pl-10 pr-4 py-2 w-full sm:w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button className="w-full sm:w-auto bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
              Submit
            </button>
          </div>
        </div>
      </div>
         <Footer />
    </>
  );
};

export default Jobseekers;
