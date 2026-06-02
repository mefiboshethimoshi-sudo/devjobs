import JobCard from './JobCard';

function JobList({ jobs, savedIds, onSave }: any) {
  return (
    <div>
      {jobs.map((job: any) => (
        <JobCard
          key={job.id}
          {...job}
          isSaved={savedIds.has(job.id)}
          onSave={onSave}
        />
      ))}
    </div>
  );
}

export default JobList;
