import JobCard from './components/JobCard';

function App() {
  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Tech Company',
      location: 'Dar es Salaam',
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'Software House',
      location: 'Arusha',
    },
  ];

  return (
    <div>
      <h1>Dev Jobs</h1>

      {jobs.map((job) => (
        <JobCard
          key={job.id}
          {...job}
          onSave={(id) =>
            console.log('Saved job:', id)
          }
        />
      ))}
    </div>
  );
}

export default App;
