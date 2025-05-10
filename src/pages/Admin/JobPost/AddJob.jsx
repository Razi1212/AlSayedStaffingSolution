"use client"

import React, { useState } from "react";
import Dashboard from "../Dashboard";
import axios from "axios";
import { industryTypes } from "@/lib/utils";
import Swal from "sweetalert2";

const AddJob = () => {
  const [title, setTitle] = useState('')
  const [industry, setIndustry] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [responsibilities, setResponsibilities] = useState('')
  const [qualifications, setQualifications] = useState('')
  const [benefits, setBenefits] = useState('')
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      //const response = await axios.post('/api/routelocal', {title, industry, location, description, responsibilities, qualifications, benefits})
      const response = await axios.post('/api/createJob', { title, industry, location, description, responsibilities, qualifications, benefits })
      if(response){
        Swal.fire({
          title: "Success",
          text: "Job added successfully",
          icon: "success",
          confirmButtonText: "OK"
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload(); // Reload after clicking OK
          }
        });

      }
      
    } catch (error) {
      if (error.response) {
        // The server responded with a status code outside the range of 2xx
        if (error.response.status === 404) {
          console.error("Resource not found, please check the endpoint.");
        } else {
          console.error("Error:", error.response.status);
        }
      } else {
        // Something went wrong in setting up the request
        console.error("Request failed:", error.message);
      }
    }
  }

  return (
    <>
      <Dashboard />
      <div className="bg-BgColor-homecolor min-h-screen w-full px-20 py-10">
        <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">

          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="JobTitle"
            id="JobTitle"
            required
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Job Title"
          />


<select
  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  name="Industry"
  id="Industry"
  required
  onChange={(e) => setIndustry(e.target.value)}
>
  <option value="" className="text-gray-1000"  > select Industry</option>
  {industryTypes.map((industry, index) => (
    <option key={index} value={industry}>
      {industry}
    </option>
  ))}
</select>

          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="Location"
            id="Location"
            required
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />

          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="JobDescription"
            id="JobDescription"
            placeholder="Job Description"
            onChange={(e) => setDescription(e.target.value)}
            rows={6}
          ></textarea>

          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="Responsibilities"
            id="Responsibilities"
            placeholder="Responsibilities"
            onChange={(e) => setResponsibilities(e.target.value)}
            rows={6}
          ></textarea>

          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="Qualifications"
            id="Qualifications"
            placeholder="Qualifications"
            onChange={(e) => setQualifications(e.target.value)}
            rows={6}
          ></textarea>

          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="Benefits"
            id="Benefits"
            placeholder="Benefits"
            onChange={(e) => setBenefits(e.target.value)}
            rows={6}
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>


    </>
  );
};

export default AddJob;
