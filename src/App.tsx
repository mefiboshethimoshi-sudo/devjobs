import { useState } from 'react';
import './App.css';

import JobList from './components/JobList';
import { JOBS } from './data/jobs';

function App() {

  const [searchQuery, setSearchQuery] =
    useState<string>('');

  // FILTER THE JOBS ARRAY
  const filteredJobs = JOBS.filter((job) =>
    job.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase()) ||

    job.company
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

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

      {/* IMPORTANT: USE filteredJobs HERE */}
      <JobList jobs={filteredJobs} />

    </div>
  );
}

export default App;
