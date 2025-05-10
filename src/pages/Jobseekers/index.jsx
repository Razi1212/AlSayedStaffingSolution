'use client';

import React, { useEffect, useState } from "react";
import Navigation from "../Components/Navigations";
import { BsBag } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import Footer from "../Components/Footer";
import Link from "next/link";
import Loader from "@/components/loaders/Loader"; // <-- Import your loader

const Jobseekers = () => {
  const [Jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // <-- loading state

  useEffect(() => {
    async function fetchJobs() {
      setIsLoading(true); // Start loading
      try {
        const res = await fetch("/api/getJobs");
        if (!res.ok) throw new Error("Failed to fetch jobs");
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setIsLoading(false); // Stop loading
      }
    }
    fetchJobs();
  }, []);

  return (
    <>
      <Navigation />

      <div className="bg-BgColor-homecolor px-6 lg:p-20 min-h-screen">
        <div>
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
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-2xl mx-auto mb-10">
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
            <button className="w-full sm:w-auto bg-BgColor-buttonclr text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
              Submit
            </button>
          </div>
        </div>

        {/* Loader or Jobs */}
        <div>
          {isLoading ? (
            <div className="flex justify-center items-center min-h-[300px]">
              <Loader />
            </div>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {Jobs.length === 0 ? (
                <div className="text-center w-full col-span-2">
                  <p>No jobs available</p>
                </div>
              ) : (
                Jobs.map((Job) => (
                  <li
                    key={Job._id}
                    className="bg-gradient-to-tr from-[#f1f5f9] via-white to-[#e2e8f0]
 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl p-6 sm:p-12 text-gray-800 transition-all duration-300 hover:shadow-[0_10px_60px_rgba(99,102,241,0.25)] hover:border-indigo-400 group"

                  >
                    <h2 className="text-xl font-semibold mb-3">{Job.title}</h2>
                    <h2 className="text-xl mb-1 flex items-center gap-2">
                      <FiMapPin className="text-gray-500" />
                      {Job.location}
                    </h2>

                    <p className="mb-5 line-clamp-2 overflow-hidden text-ellipsis">
                      {Job.description}
                    </p>

                    <div className="flex gap-3 text-center flex-wrap">
                      <Link href={`/Jobseekers/${Job.jobId}`}>
                        <button className="bg-BgColor-buttonclr text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-900 transition">
                          View More
                        </button>
                      </Link>
                      <h2>Multiple Vacancies</h2>
                      <h2>Posted 30 days ago</h2>
                    </div>
                  </li>
                ))
              )}
            </ul>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Jobseekers;
