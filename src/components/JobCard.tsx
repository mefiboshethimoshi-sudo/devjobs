import React from 'react'
import styles from './JobCard.module.css'

const JobCard = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Senior Frontend Dev</h2>
      <p className={styles.company}>TechCorp Africa</p>
      <p className={styles.location}>Nairobi, Kenya</p>
      <p className={styles.salary}>KES 150k–200k</p>
    </div>
  )
}

export default JobCard
