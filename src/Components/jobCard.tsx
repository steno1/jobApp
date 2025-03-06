import React, { useState } from "react";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
}

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="job-card">
      <h2>{job.title}</h2>
      <h3>{job.company}</h3>
      <p>{job.location}</p>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails && <p>Salary: {job.salary}</p>}
    </div>
  );
};

export default JobCard;
