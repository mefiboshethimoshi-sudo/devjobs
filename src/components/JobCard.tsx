import React from 'react'
import styles from './JobCard.module.css'

interface Job {
  id: number
  title: string
  company: string
  location: string
  salary: string
  isRemote: boolean
}

interface JobCardProps {
  job: Job
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{job.title}</h2>
      <p className={styles.company}>{job.company}</p>
      <p className={styles.location}>{job.location}</p>
      <p className={styles.salary}>{job.salary}</p>
    </div>
  )
}

export default JobCard
