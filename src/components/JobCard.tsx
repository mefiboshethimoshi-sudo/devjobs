import styles from "./JobCard.module.css";
import { Job } from "../types";

function JobCard({
  title,
  company,
  location,
  salary,
  isRemote,
  postedAt = "Recently",
}: Job): JSX.Element {
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

      <small className={styles.postedAt}>{postedAt}</small>
    </div>
  );
}

export default JobCard;
