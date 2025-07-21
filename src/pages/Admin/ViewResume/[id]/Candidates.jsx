// pages/Admin/ViewResume/[id]/Candidates.jsx

import React from "react";
import axios from "axios";

const CandidateDetails = ({ user }) => {
  if (!user) {
    return (
      <div className="lg:max-w-[1400px] mx-auto lg:px-[8%] lg:py-10 bg-BgColor-testing">
        <h2 className="text-xl font-bold mb-4">Candidate Information</h2>
        <p>No candidate found.</p>
      </div>
    );
  }

  return (
    <div className="lg:max-w-[1400px] mx-auto lg:px-[8%] lg:py-10 bg-BgColor-testing">
      <h2 className="text-xl font-bold mb-4">Candidate Information</h2>
      <div className="rounded border p-4 shadow-md bg-BgColor-contactcolor">
        <strong className="capitalize">{user.candidateName}</strong>
        <p className="text-xs capitalize">{user.position}</p>
        <p>{user.email}</p>
        <p><strong>Resume File Name:</strong> {user.fileName}</p>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  let user = null;

  try {
    const res = await axios.get(`http://localhost:3000/api/candidate/${id}`);
    user = res.data;
  } catch (error) {
    console.error("Error fetching user:", error);
  }

  return {
    props: { user },
  };
}

export default CandidateDetails;
