import styles from "./JobCard.module.css";

interface JobProps {
  id: number;
  title: string;
  company: string;
  location: string;
  salary?: string;
  isRemote: boolean;
  postedAt?: string;
}

function JobCard({
  title,
  company,
  location,
  salary,
  isRemote,
  postedAt = "Recently",
}: JobProps) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>

      <h3 className={styles.company}>{company}</h3>

      <p className={styles.location}>{location}</p>

      <p className={styles.salary}>
        {salary ?? "Salary not listed"}
      </p>

      <p className={styles.remote}>
        {isRemote ? "Remote" : "On-site"}
      </p>

      <small className={styles.postedAt}>
        {postedAt}
      </small>
    </div>
  );
}

export default JobCard;
