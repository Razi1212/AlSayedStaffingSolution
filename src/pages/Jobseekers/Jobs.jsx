import { useEffect, useState } from 'react';

export default function Jobs() {
  const [Jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const res = await fetch('/api/getJobs');
        if (!res.ok) throw new Error('Failed to fetch jobs');
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    }

    fetchJobs();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
      <ul>
        {Jobs.map((Job) => (
          <li key={Job._id} className="border p-4 mb-2 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{Job.title}</h2>
            <p>{Job.description}</p>
            <small>Created at: {new Date(Job.createdAt).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
