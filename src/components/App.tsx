import React from 'react'
import JobCard from './components/JobCard'

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
        marginTop: '40px',
      }}
    >
      <JobCard />
      <JobCard />
      <JobCard />
    </div>
  )
}

export default App
