import React from "react";
import Navigation from "../Components/Navigations";
import { BsBag } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import Footer from "../Components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";

const Jobseekers = () => {
  const [Jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const res = await fetch("/api/getJobs");
        if (!res.ok) throw new Error("Failed to fetch jobs");
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    }
    fetchJobs();
  }, []);
  return (
    <>
      <Navigation />
      {/* <div className="bg-gradient-to-t from-zinc-50 to-zinc-300 min-h-screen px-6"> */}
      <div className="bg-BgColor-homecolor  px-6 lg:p-20">
        <div className="">
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
            <button className="w-full sm:w-auto bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
              Submit
            </button>
          </div>
        </div>

        <div >
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {Jobs.map((Job) => (
              <>
                <li
                  key={Job._id}
                  className="border p-4 mb-6 rounded-lg shadow-md  bg-white"
                >
                  <h2 className="text-xl font-semibold mb-3">{Job.title}</h2>
                  <h2 className="text-xl mb-1 flex items-center gap-2">
                    <FiMapPin className="text-gray-500" />
                    {Job.location}
                  </h2>

                  <p className="mb-5 line-clamp-2 overflow-hidden text-ellipsis">
                    {Job.description}
                  </p>

                  <div className="flex gap-3 text-center">
                    <Link href={`/Jobseekers/${Job.jobId}`}>
                      <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-900 transition">
                        View More
                      </button>
                    </Link>
                    <h2>Multiple Vacancies</h2>
                    <h2>Posted 30days ago</h2>
                  </div>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Jobseekers;
