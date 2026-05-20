import React from 'react'

const JobCard = () => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '20px',
        width: '250px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
      }}
    >
      <h2>Senior Frontend Dev</h2>
      <p>TechCorp Africa</p>
      <p>Nairobi, Kenya</p>
      <p>KES 150k–200k</p>
    </div>
  )
}

export default JobCard
