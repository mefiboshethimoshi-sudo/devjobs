import React from 'react'
import JobCard from './components/JobCard'

const App = () => {
  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Dev',
      company: 'TechCorp Africa',
      location: 'Nairobi, Kenya',
      salary: 'KES 150k–200k',
      isRemote: true,
    },
    {
      id: 2,
      title: 'Backend Engineer',
      company: 'DataHub TZ',
      location: 'Dar es Salaam',
      salary: 'TZS 2M–3M',
      isRemote: false,
    },
    {
      id: 3,
      title: 'DevOps Specialist',
      company: 'CloudBase KE',
      location: 'Mombasa',
      salary: 'KES 180k–250k',
      isRemote: true,
    },
  ]

  return (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
        padding: '40px',
        backgroundColor: '#f3f4f6',
        minHeight: '100vh',
      }}
    >
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  )
}

export default App
