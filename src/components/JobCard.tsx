interface JobProps {
  id: number;
  title: string;
  company: string;
  location: string;
  salary?: string; // optional
  isRemote: boolean;
  postedAt: string;
}

function JobCard({
  title,
  company,
  location,
  salary,
  isRemote,
  postedAt,
}: JobProps) {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{company}</h3>
      <p>{location}</p>

      {salary && <p>{salary}</p>}

      <p>{isRemote ? "Remote" : "On-site"}</p>
      <small>{postedAt}</small>
    </div>
  );
}

export default JobCard;
