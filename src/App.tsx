import React from 'react'
import JobCard from './components/JobCard'

const App = () => {
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
      <JobCard />
      <JobCard />
      <JobCard />
    </div>
  )
}

export default App
