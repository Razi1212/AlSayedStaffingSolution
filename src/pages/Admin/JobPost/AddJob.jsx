import React from "react";
import Dashboard from "../Dashboard";

const AddJob = () => {
  return (
    <>
      <Dashboard />
      <form className="space-y-4">
        <input
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          name="JobTitle"
          id="Job Title"
          required=""
          placeholder="Job Title"
        />
        <input
          className="w-full p-3 border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="Industry"
          name="Industry"
          id="Industry"
          required=""
          placeholder="Industry"
        ></input>
        <input
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="Location"
          name="Location"
          id="Location"
          required=""
          placeholder="Location"
        ></input>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="JobDescription"
          id="JobDescription"
          placeholder="Job Description"
          style={{ height: "307px" }}
        ></textarea>

        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="Responsibilites"
          id="Responsibilites"
          placeholder="Responsibilites"
          style={{ height: "307px" }}
        ></textarea>

        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="Qualifications"
          id="Qualifications"
          placeholder="Qualifications"
          style={{ height: "307px" }}
        ></textarea>

        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="Benefits"
          id="Benefits"
          placeholder="Benefits"
          style={{ height: "307px" }}
        ></textarea>

        <button>Submit</button>
      </form>
    </>
  );
};

export default AddJob;
