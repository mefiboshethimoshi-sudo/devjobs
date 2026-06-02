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

    let didExist = false;

    // ✅ OPTIMISTIC UPDATE (instant UI change)
    setSavedIds((prev) => {
      const next = new Set(prev);

      didExist = next.has(id);

      if (didExist) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });

    // ✅ SIMULATED SERVER RESPONSE
    setTimeout(() => {
      const failed = Math.random() < 0.3;

      if (failed) {
        // ❌ ROLLBACK STATE
        setSavedIds((prev) => {
          const rollback = new Set(prev);

          if (didExist) {
            rollback.add(id); // restore original
          } else {
            rollback.delete(id); // remove added
          }

          return rollback;
        });

        alert('Could not save — please try again.');
      }
    }, 1500);
  }

  const filteredJobs = JOBS.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">

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
