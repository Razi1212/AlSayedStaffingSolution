import React from "react";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className=" bg-BgColor-Dashboard">
      {/* Top Navigation Bar */}
      <nav className="bg-gray-800 text-white p-4 shadow-md">
        <div className="flex gap-6">
          <Link href="/Admin/JobPost" className="hover:text-gray-300">
            Post Jobs
          </Link>
          <Link href="/Admin/ViewResume" className="hover:text-gray-300">
            View Resume
          </Link>
          <Link href="/Admin/InternalHiring" className="hover:text-gray-300">
            Internal Hiring
          </Link>
        </div>
      </nav>

    </div>
  );
};

export default Dashboard;
