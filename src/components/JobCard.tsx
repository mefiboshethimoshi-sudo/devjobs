import styles from "./JobCard.module.css";
import Badge from "./Badge";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  isRemote: boolean;
  type?: "Full Time" | "Contract";
};

type Props = {
  job: Job;
};

export default function JobCard({ job }: Props) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{job.title}</h3>

      {/* ✅ NEW BADGE COMPONENT */}
      {job.isRemote && <Badge label="Remote" variant="green" />}

      {job.type === "Full Time" && (
        <Badge label="Full Time" variant="blue" />
      )}

      {job.type === "Contract" && (
        <Badge label="Contract" variant="orange" />
      )}

      <p className={styles.company}>
        {job.company} · {job.location}
      </p>
    </div>
  );
}
