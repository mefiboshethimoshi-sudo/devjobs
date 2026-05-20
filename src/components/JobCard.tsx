import styles from "./JobCard.module.css";

type Job = {
  title: string;
  company: string;
  location: string;
  isRemote: boolean;
};

type Props = {
  job: Job;
};

export default function JobCard({ job }: Props) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{job.title}</h3>

      {/* ✅ Conditional Rendering (NO empty space if false) */}
      {job.isRemote && (
        <span className={styles.remoteBadge}>Remote</span>
      )}

      <p className={styles.company}>
        {job.company} · {job.location}
      </p>
    </div>
  );
}
