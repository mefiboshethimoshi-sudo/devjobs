import { useState } from 'react';
import Header from './components/Header';
import JobList from './components/JobList';
import { JOBS } from './data/jobs';

function App() {

  const [searchQuery, setSearchQuery] =
    useState<string>('');

  const [savedIds, setSavedIds] =
    useState<Set<number>>(new Set());

  function handleSave(id: number) {
    setSavedIds((prev) => {
      const next = new Set(prev);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  }

  const filteredJobs = JOBS.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">

      {/* ✅ HEADER WITH COUNT */}
      <Header savedCount={savedIds.size} />

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

      <JobList
        jobs={filteredJobs}
        savedIds={savedIds}
        onSave={handleSave}
      />

    </div>
  );
}

export default App;
