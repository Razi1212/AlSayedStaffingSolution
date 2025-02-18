import React, { useState } from "react";
import Dashboard from "../Dashboard";
import { useRouter } from "next/router";

const JobPost = () => {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    console.log("Searching for:", e.target.value);
  };

  const handleAddJobClick = () => {
    router.push("/Admin/JobPost/AddJob");
  };
  return (
    <>
      <Dashboard />
      <div className="bg-BgColor-Dashboard min-h-screen w-full px-10">
        <p>Create and manage job postings here.</p>
        <div className="flex gap-6"> 
          <button onClick={handleAddJobClick}>Add Job</button>

          <input
            type="text"
            placeholder="Search on JobDescription"
            value={searchQuery}
            onChange={handleSearch}
            className="p-2 rounded-md text-black border border-gray-400"
          />

          <input
            type="text"
            placeholder="Date Filter"
            value={searchQuery}
            onChange={handleSearch}
            className="p-2 rounded-md text-black border border-gray-400"
          />

        </div>

        <hr className="border-t border-black my-4" />

      </div>
    </>
  );
};

export default JobPost;
