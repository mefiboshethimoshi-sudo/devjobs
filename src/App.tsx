import { useState } from 'react';
import Header from './components/Header';
import JobList from './components/JobList';
import { JOBS } from './data/jobs';

function App() {

  const [searchQuery, setSearchQuery] =
    useState<string>('');

  const [savedIds, setSavedIds] =
    useState<Set<number>>(new Set());

  // ✅ FIX: proper typed event handler
  function handleSearchChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setSearchQuery(e.target.value);
  }

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

      <Header savedCount={savedIds.size} />

      <h1>Dev Jobs</h1>

      {/* FIX: no inline any event typing */}
      <input
        type="text"
        placeholder="Search jobs..."
        value={searchQuery}
        onChange={handleSearchChange}
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
