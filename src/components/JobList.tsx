import JobCard from "./JobCard";

export type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  isRemote: boolean;
};

interface JobListProps {
  jobs: Job[];
}

export default function JobList({ jobs }: JobListProps) {
  return (
    <div>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
