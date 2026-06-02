import { useState } from 'react';
import './App.css';
import JobCard from './components/JobCard';

function App() {
  const [searchQuery, setSearchQuery] =
    useState<string>('');

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
    <div className="app">

      <h1>Dev Jobs</h1>

      <input
        type="text"
        placeholder="Search jobs..."
        value={searchQuery}
        onChange={(e) =>
          setSearchQuery(e.target.value)
        }
      />

      <p>
        Searching for: {searchQuery}
      </p>

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
