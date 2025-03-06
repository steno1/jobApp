import React, { useState, useEffect } from "react";
import JobList from "./Components/jobList"; 
import jobsData from "./data/jobs.json";
import "./styles.css";

// Define Job type
interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
}

const App: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]); 

  useEffect(() => {
    setJobs(jobsData);
  }, []);

  return (
    <div className="app-container">
      <h1>Job Listings</h1>
      <JobList jobs={jobs} />
    </div>
  );
};

export default App;
