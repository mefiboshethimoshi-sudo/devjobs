import JobCard from "./JobCard";
import { Job } from "../types";

interface JobListProps {
  jobs: Job[];
}

function JobList({ jobs }: JobListProps) {
  // Empty state
  if (jobs.length === 0) {
    return (
      <div className="empty-state">
        <p>No jobs found. Try adjusting your search.</p>
      </div>
    );
  }

  return (
    <div className="job-list">
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
}

export default JobList;
