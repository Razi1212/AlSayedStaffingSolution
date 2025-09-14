'use client'; // If App Router

import React, { useState, useEffect } from "react";
import Dashboard from "../Dashboard";
import { useRouter } from "next/router";
import Link from "next/link";
import Loader from "@/components/loaders/Loader";
import Swal from "sweetalert2";

const JobPost = () => {
  const router = useRouter();
  const [jobs, setJobs] = useState([]);
  const [titleFilter, setTitleFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchJobs = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/getJobs");
      if (!res.ok) throw new Error("Failed to fetch jobs");
      const data = await res.json();
      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleAddJobClick = () => {
    router.push("/Admin/JobPost/AddJob");
  };

  const handleDelete = async (job) => {
    const result = await Swal.fire({
      title: `Are you sure?`,
      text: `Do you want to delete "${job.title}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`/api/deleteJob?jobId=${job?.jobId}`, {
          method: "DELETE",
        });

        if (res.ok) {
          await Swal.fire({
            title: "Deleted!",
            text: `${job.title} has been deleted successfully.`,
            icon: "success",
            confirmButtonText: "OK",
          });
          fetchJobs();
        } else {
          Swal.fire({
            title: "Failed!",
            text: "Failed to delete job.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      } catch (error) {
        console.error("Error deleting job:", error);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }
  };

  // ✅ Filtering by job title + date only
  const filteredJobs = jobs.filter((job) => {
    const matchesTitle =
      !titleFilter ||
      job.title?.toLowerCase().includes(titleFilter.toLowerCase());

    const matchesDate =
      !dateFilter ||
      (job.createdAt &&
        new Date(job.createdAt).toISOString().slice(0, 10) === dateFilter);

    return matchesTitle && matchesDate;
  });

  return (
    <>
      <Dashboard />
      <div className="bg-BgColor-testing min-h-screen w-full lg:px-[8%] lg:py-10 p-5">
        <p className="text-lg py-4">Create and manage job postings here.</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-wrap gap-6">
            {/* ✅ Job title search with suggestions */}
            <input
              type="text"
              list="job-titles"
              placeholder="Search by Job Title"
              value={titleFilter}
              onChange={(e) => setTitleFilter(e.target.value)}
              className="p-2 rounded-md text-black border border-gray-400"
            />
            <datalist id="job-titles">
              {jobs.map((job) => (
                <option key={job._id} value={job.title} />
              ))}
            </datalist>

            {/* ✅ Date filter */}
            <input
              type="date"
              placeholder="Date Filter"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="p-2 rounded-md text-black border border-gray-400"
            />
          </div>

          <div>
            <button
              onClick={handleAddJobClick}
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
            >
              + Add Job
            </button>
          </div>
        </div>

        <hr className="border-t border-black my-4" />

        <div>
          <ul>
            {isLoading ? (
              <div className="text-center py-4">
                <Loader />
              </div>
            ) : filteredJobs.length === 0 ? (
              <div className="text-center py-4">
                <p>No jobs available</p>
              </div>
            ) : (
              filteredJobs.map((job) => (
                <li
                  key={job._id}
                  className="border p-4 mb-6 rounded-lg shadow-md flex flex-col gap-2 bg-BgColor-contactcolor"
                >
                  <h2 className="text-xl font-bold uppercase">{job.title}</h2>
                  <h2 className="text-lg font-semibold capitalize">{job.location}</h2>
                  <p className="text-gray-700">{job.description} ....</p>
                  <p className="text-sm text-gray-500">Job ID: {job.jobId}</p>
                  <p className="text-sm text-gray-500">
                    Date Posted:{" "}
                    {job.createdAt
                      ? new Date(job.createdAt).toLocaleDateString()
                      : "N/A"}
                  </p>

                  <div className="flex justify-end gap-2">
                    <Link href={`/Jobseekers/${job.jobId}`}>
                      <button className="bg-yellow-300 text-black px-6 py-2 w-80 rounded hover:bg-yellow-400 transition">
                        View More
                      </button>
                    </Link>

                    <button
                      onClick={() => handleDelete(job)}
                      className="bg-red-400 text-white px-6 py-2 rounded w-80 hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default JobPost;
